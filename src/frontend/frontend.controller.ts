import { Controller, Get, Req, Res } from '@nestjs/common';
const fs = require('fs');
const path = require('path');

@Controller('client')
export class FrontendController {
  @Get('/')
  async getClient(@Req() req, @Res() res) {
    const buildFolder = path.join(__dirname, '..', '..', 'client');
    const files = fs.readdirSync(buildFolder);
    const htmlFile = files.find((file) => file.endsWith('.html'));

    if (htmlFile) {
      const htmlFilePath = path.join(buildFolder, htmlFile);
      const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

      return res.send(htmlContent);
    } else {
      return res.status(404).send('HTML file not found');
    }
  }
}
