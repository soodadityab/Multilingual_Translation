from groq import Groq
client = Groq()
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "you are a fluent translator and are familiar with the cultures and ways of speaking in different countries."
        },
        # Set a user message for the assistant to respond to.
        {
            "role": "user",
            "content": "Translate from ___ to ___ and try to speak/create text in a way consistent with the way people in ___ talk. Here is what you need to translate: ",
        }
    ],
    model="llama3-8b-8192",
    temperature=0.5,
    max_tokens=1024,
    top_p=1,
    stop=None,
    stream=False,
)

print(chat_completion.choices[0].message.content)