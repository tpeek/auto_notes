var request = require('request');
var summarizer = require('link-summarizer')();

module.exports = (context, cb) => {
  summarizer.summarizeLink(context.data.url,
    (response) => {
      request.post(
        'https://maker.ifttt.com/trigger/new_summary/with/key/' + context.secrets.key1,
        {form: {value1: response.title, value2: response.summary}},
        (error, res, body) => {
          if (error)
            cb(error);
          else
            cb(null, body);
        }
      );
    }
  );
};

