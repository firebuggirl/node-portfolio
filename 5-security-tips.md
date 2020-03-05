# How to improve your site's performance and prevent security vulnerabilities

https://web.dev/external-anchors-use-rel-noopener/


- when using target="_blank", always add rel="noopener" or rel="noreferrer":


  ```html
  <a href="https://examplepetstore.com" target="_blank" rel="noopener">
    Example Pet Store
  </a>
```

- rel="noopener" prevents the new page from being able to access the window.opener property and ensures it runs in a separate process.

- rel="noreferrer" has the same effect but also prevents the Referer header from being sent to the new page. See Link type "noreferrer".
