### Advanced CSS Layouts

This exercise will cover creating layouts in CSS. This is a tricky subject to
learn so feel free to experiement and see what works and what doesn't

___
### A Brief CSS Recap
CSS stands for cascading style-sheets and is used to add styling properties to
elements in an HTML document. Stylesheets are usually either embeded in the HTML
of a website or loaded from an external source within the head tag. The
structure of a CSS file is a follows:

0 or more of:
```
    <selector> {
        <list of styling properties>
    }
```

CSS selectors are used to select elements in the HTML flow based off of
properties they contain. You can view a selector reference here:

https://www.w3schools.com/cssref/css_selectors.asp

Here is an example that makes every instance of a div with the class "red" on
it have a red background

```
div.red{
    background-color: red;
}

//This would match these tags
//<div class = "red"></div>
//<div id = "random_id" class = "red other italic">
//And would not match
//<h1 class = "red"></h1>
```
### Laying Things Out In CSS

HTML rendering engines define a very specific set of rules as to how an element
is laid out on the page. I highly recommend reading this article about the
difference between an inline and a block level element

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow

TL;DR: In a block formatting context, boxes are laid out one after the other,
vertically, beginning at the top of a containing block. In an inline formatting
context, boxes are laid out horizontally, one after the other, beginning at the
top of a containing block.

### Inspect Element for Fun and Profit

Most (I think all) browsers have the ability to inspect elements. This can
usually be done by right clicking an element and selecting "Inspect Element".
This should open the developer console and display information about the layout
of the element you're looking at. This will be invaluable for figuring out how
these layout mechanics work. Selecting the "Layout" tab in the insepct console
will show you exactly what is happening to each element. I HIGHLY recommend
looking at the demo page and viewing how things are laid out using this tool.

### The Exercise
I've created a demo.html page to demonstrate some of the layout properties of
the HTML layout engine. I HIGHLY recommend becoming familiar with the flexbox
system for this task. demo.html should provide a demo of how the various
properties act to change layouts

I've also included screenshots of 3 webpages with basic content. I want you to
replicate the layouts using CSS properties

I'm not as concerned about matching colors/fonts. I really am more interested in
the base layout

### I STILL NEED TO CREATE THE OTHER 2 EXAMPLES

### Tips
* One of the exercises requires creating a fullscreen layout. Make note of the
  fact that *by default* the ```<html></html>``` tag that contains the ENTIRE
  page body is only as large as it needs to be to contain the content inside of
  it. If the page only needs 200px of height, then the HTML element will be
  200px by defaults. Remember, you can assign styles to the HTML tag.

* CSS provides a large variety of units of measurement. Reference them here: 
    https://www.w3schools.com/CSSref/css_units.asp

    Keep in mind as you're writing your layout, screen sizes vary WILDLY. If I
    create a div with a width of 1000px, that will take up rougly half of a
    1920x1080 scree. But if the person is using a 720p creen, that div will be
    bigger than the screen and create vertical scroll bars. It's best to keep
    layouts expressed in percentages. Try resizing the window you're working in
    to see how your page flows as the size of the window changes


