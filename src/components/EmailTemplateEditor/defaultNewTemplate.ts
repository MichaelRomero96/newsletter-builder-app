const getDefaultNewTemplate = () => `
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; }
    .newsletter { padding: 100px 0; background-color: #f0f0f0; text-align: center; font-family: Arial, sans-serif; }
    .content { max-width: 960px; margin: auto; padding: 0 20px; }
    .title { font-size: 48px; margin-bottom: 50px; }
    .text { font-size: 24px; line-height: 1.6; }
    .button { display: inline-block; margin-top: 50px; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; }
  </style>
  <body>
    <section class="newsletter">
      <div class="content">
        <h1 class="title">Welcome to Our Newsletter!</h1>
        <p class="text">Stay updated with our latest news.</p>
        <a href="#" class="button">Subscribe</a>
      </div>
    </section>
  </body>
`;

export default getDefaultNewTemplate;
