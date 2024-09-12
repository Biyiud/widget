# Biyiud's Widget
## Introduction
The BIyiud's widget is a simple and lightweight solution for displaying a user's BSR (Biyiud Sustainability Rating) score on a client's website. The widget is designed to be easy to integrate and can be customized to fit the client's website's design and layout.

The insertion of the widget is quite simple. Just a 3-line code snippet:
- Load the widget script located at `https://biyiud.eco/widget.js`
- Create a DIV container for the widget
- Call the widget `renderBSRWidget()` function with the container ID and the user ID as arguments.

This is how it looks like:

![EcoRating](./src/widget-example.png)

## Webpage example
This a simple example of a webpage with the Biyiud's widget inserted.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Client Website</title>

  <!-- Load the widget script -->
  <script src="https://biyiud.eco/widget.js"></script>
</head>
<body>

  <h1>Welcome to Client's Website</h1>
  <p>This is a basic client website content.</p>

  <!-- Widget container -->
  <div id="bsr-widget"></div>

  <!-- Call the widget rendering function with the user ID -->
  <script>
    // Ensure that the DOM elements are loaded
    document.addEventListener("DOMContentLoaded", function() {
      renderBSRWidget('bsr-widget', 'greener');
    });
  </script>

</body>
</html>
```
## Next.js Implementation

For those using Next.js, integrating the Biyiud's widget is straightforward. Here's how you can do it:

1. **Create a new file for the widget component**, e.g., `Widget.js`:

```javascript
"use client";
import Script from "next/script";

export function Widget() {
  return (
    <>
      <Script
        src="https://storage.googleapis.com/widget-biyiud/widget.js"
        strategy="afterInteractive"
        onReady={() => window.renderBSRWidget("bsr-widget", "your-company-nickname")}
      />
      <div id="bsr-widget" />
    </>
  );
}

```
Replace `"your-company-nickname"` with the actual nickname of your company. This ensures that the widget displays the correct BSR score.

Once you have created the `Widget` component, you can use it in any of your Next.js pages or other components. Here's an example of how to use it in

```javascript
import { Widget } from '../components/Widget'; // Adjust the path as necessary

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>This is a basic example of a Next.js page with the Biyiud's widget.</p>
      <Widget />
    </div>
  );
}
```
### Important Notes

- **`"use client";`**: This directive ensures that the component is treated as a client-side component, which is necessary for the `onReady` function to work correctly.
- **`Script` Component**: The `Script` component from Next.js is used to load the widget script. The `strategy="afterInteractive"` ensures that the script is loaded after the page becomes interactive. For more information, refer to the [Next.js documentation on the Script component](https://nextjs.org/docs/basic-features/script).
