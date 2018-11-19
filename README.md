# Twitter Age

Given a username, provide the age of the account.


# Some development notes

Twitter's [Get User Lookup](https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup) User API https://api.twitter.com/1.1/users/lookup.json can accept either (or both) a query param of `screen_name` or `user_id` that 
can contain multiple values, comma-separated. The multiple values might be useful in an expanded tweet thread.

From the docs:


```
 curl --request GET 
  --url 'https://api.twitter.com/1.1/users/lookup.json?user_id=783214,6253282' 
  --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app", 
  oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
  oauth_version="1.0"'
```

or using [twurl](https://github.com/twitter/twurl):
 
```
twurl /1.1/users/lookup.json?screen_name=ghchinoy | jq '.[]|.name,.created_at' -r
ghchinoy
Sat Jan 10 17:44:32 +0000 2009
```

* now that we have the date, get difference from today

Some other thoughts

* How to put this into a Chrome Extension
  * will this app need to be hosted somewhere?
  * assuming it'll be run under the person who installs the chrome extension?

