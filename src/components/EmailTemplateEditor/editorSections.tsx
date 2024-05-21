import IconsUtils from '@/app/utils/icons';
import { Editor } from 'grapesjs';
import {
  Fullscreen,
  GalleryHorizontal,
  GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  RectangleHorizontal,
  Type,
} from 'lucide-react';

const setEditorSections = (editor: Editor): void => {
 editor.BlockManager.add('header-section', {
   label: `<img src="${IconsUtils.convertIconComponentToSvg(<GalleryThumbnails color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Header`,
   attributes: { class: 'gjs-block-section' },
   content: `<table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background-color: #f0f0f0; padding: 20px;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="height: 100px;">
                        <img src="logo.png" alt="Logo" style="height: 100%; width: auto;">
                        <h1 style="font-family: 'Sans Serif';">Newsletter Title</h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>`,
 });

 editor.BlockManager.add('hero', {
   label: `<img src="${IconsUtils.convertIconComponentToSvg(<Fullscreen color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Hero`,
   attributes: { class: 'gjs-block-hero' },
   content: `<table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="padding: 100px 0; background-color: #f0f0f0; text-align: center; font-family: 'Sans Serif';">
                  <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin: auto;">
                    <tr>
                      <td style="max-width: 960px; margin: auto; padding: 0 20px;">
                        <h1 style="font-size: 48px; margin-bottom: 50px;">Welcome to Our Website!</h1>
                        <p style="font-size: 24px; line-height: 1.6;">We provide the best service for you.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>`,
 });
  editor.BlockManager.add('section', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<GalleryVertical color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Section`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td><div style="height: 200px;">Full Section</div></td>
              </tr>
            </table>`,
  });

  // 1/2 section
  editor.BlockManager.add('half-section', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<GalleryHorizontal color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> 1/2 Section`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td width="50%"><div style="height: 200px;">1/2 Section</div></td>
                <td width="50%"><div style="height: 200px;"></div></td>
              </tr>
            </table>`,
  });

  // 1/3 section
  editor.BlockManager.add('third-section', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<GalleryHorizontal color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> 1/3 Section`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td width="33.33%"><div style="height: 200px;">1/3 Section</div></td>
                <td width="33.33%"><div style="height: 200px;"></div></td>
                <td width="33.33%"><div style="height: 200px;"></div></td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('footer-section', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<GalleryVerticalEnd color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Footer`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td><div style="height: 100px;">Contact us at <a href="mailto:info@example.com">info@example.com</a></div></td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('heading-section-1', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Heading1 color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Heading 1`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <h1 style="font-family: Arial, sans-serif;">Your Heading Here</h1>
                  </div>
                </td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('heading-section-2', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Heading2 color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Heading 2`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <h2 style="font-family: Arial, sans-serif;">Your Second Heading Here</h2>
                  </div>
                </td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('heading-section-3', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Heading3 color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Heading 3`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <h2 style="font-family: Arial, sans-serif;">Your Second Heading Here</h2>
                  </div>
                </td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('heading-section-4', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Heading4 color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Heading 4`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <h2 style="font-family: Arial, sans-serif;">Your Second Heading Here</h2>
                  </div>
                </td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('heading-section-5', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Heading5 color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Heading 5`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <h2 style="font-family: Arial, sans-serif;">Your Second Heading Here</h2>
                  </div>
                </td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('heading-section-6', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Heading6 color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Heading 6`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <h2 style="font-family: Arial, sans-serif;">Your Second Heading Here</h2>
                  </div>
                </td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('text-section', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Type color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Text`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td><div style="height: auto;"><p style="font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non metus condimentum, auctor arcu id, luctus dolor.</p></div></td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('image-section', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<Image color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Image`,
    attributes: { class: 'gjs-block-section' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td><div style="height: auto;"><img src="image.jpg" alt="Image" style="height: auto; width: 100%;"></div></td>
              </tr>
            </table>`,
  });

  editor.BlockManager.add('button', {
    label: `<img src="${IconsUtils.convertIconComponentToSvg(<RectangleHorizontal color="#3B82F6" />)}" alt="Icon" style="width: 30px; height: 30px; margin: 0 auto;" /> Button`,
    attributes: { class: 'gjs-block-button' },
    content: `<table width="100%" style="background-color: #f0f0f0; padding: 20px;">
              <tr>
                <td style="text-align: center;">
                  <div style="height: auto; display: inline-block;">
                    <a href="#" style="background-color: #3B82F6; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; font-family: Arial, sans-serif;">Button</a>
                  </div>
                </td>
              </tr>
            </table>`,
  });
};

export default setEditorSections;
