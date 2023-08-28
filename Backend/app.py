import telebot
import os, json, re
import requests
import urllib.parse
from dotenv import load_dotenv
from bs4 import BeautifulSoup

load_dotenv()
BOT_TOKEN = os.environ["TELE_BOT"]
headers = { "apikey": os.environ["ZIP_KEY"]}

bot = telebot.TeleBot(BOT_TOKEN)

db = json.load(open("blood_avail.json", "r"))
donate_db = json.load(open("donate.json", "r"))


@bot.message_handler(commands=['start', 'hello'])
def send_welcome(message):
    bot.send_message(message.chat.id, "*🩸 Welcome to Blood Sphere! 🩸*\n\n\
We're thrilled to introduce you to Blood Sphere, your reliable partner in saving lives through blood donation. Our state-of-the-art blood bank is dedicated to ensuring a steady supply of blood for those in need. Join our community of compassionate donors and make a lasting impact on countless lives. Together, we can create a safer and healthier world. 💪🌍 \n\n*#DonateBlood **#SaveLives*\n\n*/donate* - To donate blood\n*/get* - To get blood of specified type", parse_mode="markdown")


"""
Handles the 'donate' command from the user.

Parameters:
    message (telegram.Message): The message object containing the command.

Returns:
    None
"""
@bot.message_handler(commands=['donate'])
def donate_handler(message):
    text = "What's your Pin Code?"
    sent_msg = bot.send_message(message.chat.id, text)
    bot.register_next_step_handler(sent_msg, donation_handler)


def donation_handler(message):

    pincode = int(message.text)
    response = requests.get('https://app.zipcodebase.com/api/v1/radius', headers=headers, params=(("code", pincode),("radius","20"),("country","in"),("unit","km")))
    data = json.loads(response.text)
    arr = set()
    for item in data["results"]:
        arr.add(item["code"])
    arr = list(arr)
    

    ctr=0
    for pin in arr:
        for item in donate_db:
            if item['pin']=="": continue
            if int(pin) == int(item["pin"]) and ctr < 5:
                ctr+=1

                link = os.getenv("GMAP_URL") + urllib.parse.quote(item["address"])

                response = f"\
*{item['name']}*\n\n\
*Address 🏥* = {item['address']}\n\
*Phone 📞* = {item['phone']}\n\
*Email 📧* = {item['email']}\n\
*Maps Link* = [CLICK HERE 🗺️📌]({link})"
                
                req = requests.get(link)
                soup = BeautifulSoup(req.content, 'html.parser')
                for tag in soup.find_all('meta'):
                    if tag.get("itemprop") == "image":
                        src = tag.get("content")
                lat = float(re.findall(r"center=([\d\.\d]+)%..[\d\.\d]+", src)[0])
                long = float(re.findall(r"center=[\d\.\d]+%..([\d\.\d]+)", src)[0])

                bot.send_location(message.chat.id, lat, long)
                bot.send_message(message.chat.id, response, parse_mode="Markdown")

    if ctr == 0:
        bot.send_message(message.chat.id, "No Donation Camps Found")


"""
Handles the '/get' command from the user and prompts for the user's pin code.

Parameters:
- message (telegram.Message): The message object containing the command.

Returns:
- None
"""
                
@bot.message_handler(commands=['get'])
def blood_finder_handler(message):
    text = "What's your Pin Code?"
    sent_msg = bot.send_message(message.chat.id, text)
    bot.register_next_step_handler(sent_msg, get_handler) 

              
def get_handler(message):
    text = "Which Blood Type do you need? (A+, A-, B+, B-, AB+, AB-, O+, O-)"
    sent_msg = bot.send_message(message.chat.id, text, parse_mode="Markdown")
    bot.register_next_step_handler(sent_msg, fetch_avialability, message.text)

def fetch_avialability(message, pincode: str):
    pincode = int(pincode)
    response = requests.get('https://app.zipcodebase.com/api/v1/radius', headers=headers, params=(("code", pincode),("radius","20"),("country","in"),("unit","km")))
    data = json.loads(response.text)
    arr = set()
    for item in data["results"]:
        arr.add(item["code"])
    arr = list(arr)
    

    ctr=0
    for pin in arr:
        for item in db["data"]:
            if int(pin) == int(item["pin"]) and ctr < 5 and (message.text) in item["availability"]:
                ctr+=1

                link = os.getenv("GMAP_URL") + urllib.parse.quote(item["address"])

                response = f"\
*{item['name']}*\n\n\
*Available Qualtity* = {item['availability'][message.text]}\n\n\
*Address 🏥* = {item['address']}\n\
*Phone 📞* = {item['phone']}\n\
*Email 📧* = {item['email']}\n\
*Maps Link* = [CLICK HERE 🗺️📌]({link})"
                
                req = requests.get(link)
                soup = BeautifulSoup(req.content, 'html.parser')
                for tag in soup.find_all('meta'):
                    if tag.get("itemprop") == "image":
                        src = tag.get("content")
                lat = float(re.findall(r"center=([\d\.\d]+)%..[\d\.\d]+", src)[0])
                long = float(re.findall(r"center=[\d\.\d]+%..([\d\.\d]+)", src)[0])

                bot.send_location(message.chat.id, lat, long)
                bot.send_message(message.chat.id, response, parse_mode="Markdown")

    if ctr == 0:
        bot.send_message(message.chat.id, "Selected Blood Type Not found")

    

@bot.message_handler(func=lambda msg: True)
def echo_all(message):
        response = "I don't understand you. Please use the commands.\n\
*/start* - To start the bot\n\
*/donate* - To donate blood\n\
*/get* - To get blood of specified type\n"
        bot.reply_to(message, response, parse_mode="Markdown")



bot.infinity_polling()



