import keyboard
import pyperclip
import random
import time

texts = ["text1", "text2", "text3", "text4"]

print("Running... Press F4 to stop.")

while True:
    if keyboard.is_pressed("F4"):
        print("Stopped.")
        break

    # pick random text
    text = random.choice(texts)

    # copy to clipboard
    pyperclip.copy(text)

    # paste
    keyboard.press_and_release("ctrl+v")

    time.sleep(0.05)
