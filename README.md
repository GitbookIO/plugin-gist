# Embed Gist in GitBook

This GitBook plugins makes it easy to embed [gists](https://gist.github.com) in a GitBook.

### How to use it?

Configure the plugin in your `book.json`:

```js
{
    "plugins": ["gist"]
}
```

Include a Gist using the `gist` block:

```md
{% gist id="https://gist.github.com/SamyPesse/6ceb8cb8d531ffab75f0" %}{% endgist %}

{% gist id="SamyPesse/6ceb8cb8d531ffab75f0" %}{% endgist %}

{% gist id="SamyPesse/6ceb8cb8d531ffab75f0",file="README.md" %}{% endgist %}

{% gist id="SamyPesse/6ceb8cb8d531ffab75f0",hideFooter=true %}{% endgist %}
```
