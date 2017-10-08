# Auto Notes

Do you read a lot of articles? Do you have troubles remembering everything you've read? Are you too lazy to take notes? Introducing... Auto Notes! Every time you read an article, Auto Notes will write your notes for you.

### Prerequisites

You need:
- [webtask account](https://webtask.io/)
- [IFTTT account](https://ifttt.com/join)
- [Google Drive account](https://www.google.com/drive/)

### Set Up
## There are three major steps:
1. Create a webtask that will summarize an article and activate another IFTTT applet
2. Create an IFTTT applet that will call your webtask whenever you archive an article in pocket
3. Create an IFTTT applet that will take a summary and append it to a Google document

## 1. Webtask
1. Create a new webtask
2. Copy the code in auto_notes.js and paste into the webtask
3. Add these node modules: request, link-summarizer
4. Get a key for IFTTT: [IFTTT Key](https://ifttt.com/services/maker_webhooks/settings) (the last part of the url in settings is the key)
5. Copy the key and add it as a secret to your webtask under key1

## 2. IFTTT 1
1. Create a new IFTTT applet
2. For this: Choose Pocket, New item archived
3. For that: Choose Webhooks, Make a web request
4. From your webtask, copy the link (bottom left) and paste it into IFTTT for the url value
5. At the end of the url, add a query parameter called url with a value `{{Url}}`

example: 
```
https://wt-longuniquenumbersandletters.run.webtask.io/auto_notes?url={{Url}}
```
6. Finish by pressing Create action

## 3. IFTTT 2
1. Create another new IFTTT applet
2. For this: Choose Webhooks, Recieve a web request, name the event `new_summary`
3. For that: Choose Google Drive, Append to a document, edit content

example:
```
{{OccurredAt}}<br>
{{Value1}}<br>
{{Value2}}<br>
___________________
```
4. Finish by pressing Create action

Test it out by archiving an article in Pocket.
