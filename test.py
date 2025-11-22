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

    # Pick a random text
    text = random.choice(texts)

    # Copy to clipboard
    pyperclip.copy(text)

    # Paste
    keyboard.press_and_release("ctrl+v")

    # Press Enter (new line)
    keyboard.press_and_release("enter")

    time.sleep(0.05)
