# GraphQL (v1.2)
2022.03.27

## this branch (v1.2) 
 
### define an schema

```
type Email {
    email: String
}

type Friend {
    id: ID
    fname: String
    emails: [String]
    Emails: [Email]
    Emails: [Email]! // required (mendatory)
}

```

### result in browser

![](0.png)

