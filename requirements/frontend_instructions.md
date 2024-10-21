# Project overview
use this guide to build a web app where users can give a text prompt to generate emoji using openai dall-e 3

# Feature requirements
- we will use next.js and shadcn/ui lucid supabase clerk
- create a form where users can put in prompt, and clicking on button that calls the replicate model to generate an emoji
- have a nice UI and animation when the emoji is blank or generating
- display all the images ever generated in a grid
- when hover each emoji img, an icon button for download, and an icon button for like should be shown up


# Relevant docs
Image generation
Learn how to generate or manipulate images with DALL·E in the API.

Looking to generate images in ChatGPT? Head to chatgpt.com.

Introduction
The Images API provides three methods for interacting with images:

Creating images from scratch based on a text prompt (DALL·E 3 and DALL·E 2)
Creating edited versions of images by having the model replace some areas of a pre-existing image, based on a new text prompt (DALL·E 2 only)
Creating variations of an existing image (DALL·E 2 only)
This guide covers the basics of using these three API endpoints with useful code samples. To try DALL·E 3, head to ChatGPT.

Usage
Generations
The image generations endpoint allows you to create an original image given a text prompt. When using DALL·E 3, images can have a size of 1024x1024, 1024x1792 or 1792x1024 pixels.

By default, images are generated at standard quality, but when using DALL·E 3 you can set quality: "hd" for enhanced detail. Square, standard quality images are the fastest to generate.

You can request 1 image at a time with DALL·E 3 (request more by making parallel requests) or up to 10 images at a time using DALL·E 2 with the n parameter.

Generate an image
python

python
from openai import OpenAI
client = OpenAI()

response = client.images.generate(
  model="dall-e-3",
  prompt="a white siamese cat",
  size="1024x1024",
  quality="standard",
  n=1,
)

image_url = response.data[0].url
What is new with DALL·E 3
Explore what is new with DALL·E 3 in the OpenAI Cookbook

Prompting
With the release of DALL·E 3, the model now takes in the default prompt provided and automatically re-write it for safety reasons, and to add more detail (more detailed prompts generally result in higher quality images).

While it is not currently possible to disable this feature, you can use prompting to get outputs closer to your requested image by adding the following to your prompt: I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:.

The updated prompt is visible in the revised_prompt field of the data response object.

Example DALL·E 3 generations
Prompt	Generation
A photograph of a white Siamese cat.	
Each image can be returned as either a URL or Base64 data, using the response_format parameter. URLs will expire after an hour..


# Current file structure
.
├── README.md
├── app
│   ├── api
│   │   └── generate-emoji
│   │       └── route.ts
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── EmojiGrid.tsx
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── components.json
├── lib
│   ├── api.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── requirements
│   ├── frontend_instructions.md
│   └── mockup.png
├── tailwind.config.ts
└── tsconfig.json