**The assignment**
# Create an event sign up form

**The assignment will test your ability to:**
Implement a simple design (from Figma) using HTML & CSS. (login with a free Figma account to be able to inspect the design)
Do simple DOM manipulation with RECT (creating, inserting, deleting elements, event listeners, etc.).
Manipulate data structures with RECT.
Write asynchronous JavaScript.
Make requests to an API. 

**The form will be used by users who want to sign up themselves and optional additional participants for an event.** 

**The form starts with the following fields:**
1) Name
1) Email address
1) Phone number
1) Birthdate  

Use the correct input types for the fields above.

Then, the user should have the option to add the same fields to add more participants. 
It should also be possible to remove the additional participants but not the main participant.

The form data should be submitted (async) to an API endpoint (just use a fake URL). Suppose that the endpoint accepts a JSON body with the structure defined further down. Note that there’s **an additional ID field for each participant** which is not part of the form.

### Single Participant 
```json
{
  "id": 0,
  "name": "",
  "email": "",
  "phone": 0,
  "bithdate": ""
}
```

### Payload (post request body)
```json
{
  "main_participant": {},
  "sub_participants": [{}]
}
```
