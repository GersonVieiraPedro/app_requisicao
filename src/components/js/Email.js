
//Pagina de email em HTML
function PageEmail(ListaDePedido){
    const HTML = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <title>Requisição Almox</title>
    
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#f8f9fd" style="background-color: #f8f9fd;">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p35t es-p40b es-p30r es-p30l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://swift-static.online.pro.br/arquivos/swift-logo.svg" alt style="display: block;" width="71"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#f8f9fd" style="background-color: #f8f9fd;">
                                            <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10b">
                                                                                            <h1>Nova Requisição Solicitada !</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10t es-p40b">
                                                                                           ${ListaPedidoHTML(ListaDePedido)}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p15t es-m-p15t es-m-p0b es-m-p0r es-m-p0l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href><img class="adapt-img" src="https://lh5.googleusercontent.com/THb47Jj5xsYzEdRN_knX-VRHv7_bZZ3xkhvRrg0-fiKXdTcNd2H94fJUJQXmIvG6q_uy76k7-ZwRe4X7NyoP5K1s3xJ9Cc5DFAz-UNQhRQ_uAB2ZSQF2IXgfd7z4nwSS6g=w1280" alt style="display: block;" width="600"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#fe5100" style="background-color: #fe5100; background-image: url(https://uxyja.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/10801592857268437.png); background-repeat: no-repeat; background-position: center top;" background="https://uxyja.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/10801592857268437.png">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p30r es-p30l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer" height="20"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p10b">
                                                                                            <h1 style="text-align: center; color: #ffffff;">Qualquer Duvida Procure a Supervisão</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10t es-p10b">
                                                                                            <p style="color: #ffffff;"><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    <style>

    .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
    }
    
    .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
    }
    
    #outlook a {
        padding: 0;
    }
    
    .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }
    
    .es-button-border:hover {
        border-style: solid solid solid solid !important;
        background: #0b317e !important;
        border-color: #42d159 #42d159 #42d159 #42d159 !important;
    }
    
    .es-button-border:hover a.es-button,
    .es-button-border:hover button.es-button {
        background: #0b317e !important;
        border-color: #0b317e !important;
    }
    
    [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 20px 10px 20px !important;
    }
    
    [data-ogsb] .es-button.es-button-1624044932414 {
        padding: 10px 20px !important;
    }
    
    [data-ogsb] .es-button.es-button-1624044932417 {
        padding: 10px 20px !important;
    }
    
    /*
    END OF IMPORTANT
    */
    body {
        width: 100%;
        font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    
    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
    }
    
    table td,
    body,
    .es-wrapper {
        padding: 0;
        Margin: 0;
    }
    
    .es-content,
    .es-header,
    .es-footer {
        table-layout: fixed !important;
        width: 100%;
    }
    
    img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    p,
    hr {
        Margin: 0;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        Margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
    }
    
    p,
    ul li,
    ol li,
    a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
    }
    
    .es-left {
        float: left;
    }
    
    .es-right {
        float: right;
    }
    
    .es-p5 {
        padding: 5px;
    }
    
    .es-p5t {
        padding-top: 5px;
    }
    
    .es-p5b {
        padding-bottom: 5px;
    }
    
    .es-p5l {
        padding-left: 5px;
    }
    
    .es-p5r {
        padding-right: 5px;
    }
    
    .es-p10 {
        padding: 10px;
    }
    
    .es-p10t {
        padding-top: 10px;
    }
    
    .es-p10b {
        padding-bottom: 10px;
    }
    
    .es-p10l {
        padding-left: 10px;
    }
    
    .es-p10r {
        padding-right: 10px;
    }
    
    .es-p15 {
        padding: 15px;
    }
    
    .es-p15t {
        padding-top: 15px;
    }
    
    .es-p15b {
        padding-bottom: 15px;
    }
    
    .es-p15l {
        padding-left: 15px;
    }
    
    .es-p15r {
        padding-right: 15px;
    }
    
    .es-p20 {
        padding: 20px;
    }
    
    .es-p20t {
        padding-top: 20px;
    }
    
    .es-p20b {
        padding-bottom: 20px;
    }
    
    .es-p20l {
        padding-left: 20px;
    }
    
    .es-p20r {
        padding-right: 20px;
    }
    
    .es-p25 {
        padding: 25px;
    }
    
    .es-p25t {
        padding-top: 25px;
    }
    
    .es-p25b {
        padding-bottom: 25px;
    }
    
    .es-p25l {
        padding-left: 25px;
    }
    
    .es-p25r {
        padding-right: 25px;
    }
    
    .es-p30 {
        padding: 30px;
    }
    
    .es-p30t {
        padding-top: 30px;
    }
    
    .es-p30b {
        padding-bottom: 30px;
    }
    
    .es-p30l {
        padding-left: 30px;
    }
    
    .es-p30r {
        padding-right: 30px;
    }
    
    .es-p35 {
        padding: 35px;
    }
    
    .es-p35t {
        padding-top: 35px;
    }
    
    .es-p35b {
        padding-bottom: 35px;
    }
    
    .es-p35l {
        padding-left: 35px;
    }
    
    .es-p35r {
        padding-right: 35px;
    }
    
    .es-p40 {
        padding: 40px;
    }
    
    .es-p40t {
        padding-top: 40px;
    }
    
    .es-p40b {
        padding-bottom: 40px;
    }
    
    .es-p40l {
        padding-left: 40px;
    }
    
    .es-p40r {
        padding-right: 40px;
    }
    
    .es-menu td {
        border: 0;
    }
    
    .es-menu td a img {
        display: inline !important;
    }
    
    /*
    END CONFIG STYLES
    */
    s {
        text-decoration: line-through;
    }
    
    p,
    ul li,
    ol li {
        font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
        line-height: 150%;
    }
    
    ul li,
    ol li {
        Margin-bottom: 15px;
    }
    
    a {
        text-decoration: underline;
    }
    
    .es-menu td a {
        text-decoration: none;
        display: block;
    }
    
    .es-wrapper {
        width: 100%;
        height: 100%;
        background-image: ;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-wrapper-color {
        background-color: #f8f9fd;
    }
    
    .es-header {
        background-color: transparent;
        background-image: ;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-header-body {
        background-color: #ffffff;
    }
    
    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
        color: #333333;
        font-size: 14px;
    }
    
    .es-header-body a {
        color: #1376c8;
        font-size: 14px;
    }
    
    .es-content-body {
        background-color: transparent;
    }
    
    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
        color: #131313;
        font-size: 16px;
    }
    
    .es-content-body a {
        color: #2cb543;
        font-size: 16px;
    }
    
    .es-footer {
        background-color: #f6f6f6;
        background-image: ;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-footer-body {
        background-color: transparent;
    }
    
    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
        color: #131313;
        font-size: 16px;
    }
    
    .es-footer-body a {
        color: #ffffff;
        font-size: 16px;
    }
    
    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #ffffff;
    }
    
    .es-infoblock a {
        font-size: 12px;
        color: #ffffff;
    }
    
    h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: bold;
        color: #212121;
    }
    
    h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: bold;
        color: #212121;
    }
    
    h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        color: #212121;
    }
    
    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px;
    }
    
    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 24px;
    }
    
    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 20px;
    }
    
    a.es-button,
    button.es-button {
        border-style: solid;
        border-color: #071f4f;
        border-width: 10px 20px 10px 20px;
        display: inline-block;
        background: #071f4f;
        border-radius: 5px;
        font-size: 16px;
        font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
    }
    
    .es-button-border {
        border-style: solid solid solid solid;
        border-color: #2cb543 #2cb543 #2cb543 #2cb543;
        background: #071f4f;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 5px;
        width: auto;
    }
    
    .es-button img {
        display: inline-block;
        vertical-align: middle;
    }
    
    /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
    @media only screen and (max-width: 600px) {
        .st-br {
            padding-left: 10px !important;
            padding-right: 10px !important;
        }
    
        p,
        ul li,
        ol li,
        a {
            line-height: 150% !important;
        }
    
        h1 {
            font-size: 30px !important;
            text-align: center;
            line-height: 120% !important;
        }
    
        h2 {
            font-size: 26px !important;
            text-align: center;
            line-height: 120% !important;
        }
    
        h3 {
            font-size: 20px !important;
            text-align: center;
            line-height: 120% !important;
        }
    
        h1 a {
            text-align: center;
        }
    
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
            font-size: 30px !important;
        }
    
        h2 a {
            text-align: center;
        }
    
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
            font-size: 26px !important;
        }
    
        h3 a {
            text-align: center;
        }
    
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
            font-size: 20px !important;
        }
    
        .es-menu td a {
            font-size: 14px !important;
        }
    
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
            font-size: 16px !important;
        }
    
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
            font-size: 16px !important;
        }
    
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
            font-size: 14px !important;
        }
    
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
            font-size: 12px !important;
        }
    
        *[class="gmail-fix"] {
            display: none !important;
        }
    
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
            text-align: center !important;
        }
    
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
            text-align: right !important;
        }
    
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
            text-align: left !important;
        }
    
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
            display: inline !important;
        }
    
        .es-button-border {
            display: block !important;
        }
    
        a.es-button,
        button.es-button {
            font-size: 16px !important;
            display: block !important;
            border-left-width: 0px !important;
            border-right-width: 0px !important;
        }
    
        .es-adaptive table,
        .es-left,
        .es-right {
            width: 100% !important;
        }
    
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
            width: 100% !important;
            max-width: 600px !important;
        }
    
        .es-adapt-td {
            display: block !important;
            width: 100% !important;
        }
    
        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }
    
        .es-m-p0 {
            padding: 0 !important;
        }
    
        .es-m-p0r {
            padding-right: 0 !important;
        }
    
        .es-m-p0l {
            padding-left: 0 !important;
        }
    
        .es-m-p0t {
            padding-top: 0 !important;
        }
    
        .es-m-p0b {
            padding-bottom: 0 !important;
        }
    
        .es-m-p20b {
            padding-bottom: 20px !important;
        }
    
        .es-mobile-hidden,
        .es-hidden {
            display: none !important;
        }
    
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
        }
    
        tr.es-desk-hidden {
            display: table-row !important;
        }
    
        table.es-desk-hidden {
            display: table !important;
        }
    
        td.es-desk-menu-hidden {
            display: table-cell !important;
        }
    
        .es-menu td {
            width: 1% !important;
        }
    
        table.es-table-not-adapt,
        .esd-block-html table {
            width: auto !important;
        }
    
        table.es-social {
            display: inline-block !important;
        }
    
        table.es-social td {
            display: inline-block !important;
        }
    
        .es-m-p5 {
            padding: 5px !important;
        }
    
        .es-m-p5t {
            padding-top: 5px !important;
        }
    
        .es-m-p5b {
            padding-bottom: 5px !important;
        }
    
        .es-m-p5r {
            padding-right: 5px !important;
        }
    
        .es-m-p5l {
            padding-left: 5px !important;
        }
    
        .es-m-p10 {
            padding: 10px !important;
        }
    
        .es-m-p10t {
            padding-top: 10px !important;
        }
    
        .es-m-p10b {
            padding-bottom: 10px !important;
        }
    
        .es-m-p10r {
            padding-right: 10px !important;
        }
    
        .es-m-p10l {
            padding-left: 10px !important;
        }
    
        .es-m-p15 {
            padding: 15px !important;
        }
    
        .es-m-p15t {
            padding-top: 15px !important;
        }
    
        .es-m-p15b {
            padding-bottom: 15px !important;
        }
    
        .es-m-p15r {
            padding-right: 15px !important;
        }
    
        .es-m-p15l {
            padding-left: 15px !important;
        }
    
        .es-m-p20 {
            padding: 20px !important;
        }
    
        .es-m-p20t {
            padding-top: 20px !important;
        }
    
        .es-m-p20r {
            padding-right: 20px !important;
        }
    
        .es-m-p20l {
            padding-left: 20px !important;
        }
    
        .es-m-p25 {
            padding: 25px !important;
        }
    
        .es-m-p25t {
            padding-top: 25px !important;
        }
    
        .es-m-p25b {
            padding-bottom: 25px !important;
        }
    
        .es-m-p25r {
            padding-right: 25px !important;
        }
    
        .es-m-p25l {
            padding-left: 25px !important;
        }
    
        .es-m-p30 {
            padding: 30px !important;
        }
    
        .es-m-p30t {
            padding-top: 30px !important;
        }
    
        .es-m-p30b {
            padding-bottom: 30px !important;
        }
    
        .es-m-p30r {
            padding-right: 30px !important;
        }
    
        .es-m-p30l {
            padding-left: 30px !important;
        }
    
        .es-m-p35 {
            padding: 35px !important;
        }
    
        .es-m-p35t {
            padding-top: 35px !important;
        }
    
        .es-m-p35b {
            padding-bottom: 35px !important;
        }
    
        .es-m-p35r {
            padding-right: 35px !important;
        }
    
        .es-m-p35l {
            padding-left: 35px !important;
        }
    
        .es-m-p40 {
            padding: 40px !important;
        }
    
        .es-m-p40t {
            padding-top: 40px !important;
        }
    
        .es-m-p40b {
            padding-bottom: 40px !important;
        }
    
        .es-m-p40r {
            padding-right: 40px !important;
        }
    
        .es-m-p40l {
            padding-left: 40px !important;
        }
        .list-group {
            display: flex;
            flex-direction: column;
            padding-left: 0;
            margin-bottom: 0;
            border-radius: 0.25rem;
          }
          
          .list-group-numbered {
            list-style-type: none;
            counter-reset: section;
          }
          .list-group-numbered > li::before {
            content: counters(section, ".") ". ";
            counter-increment: section;
          }
          
          .list-group-item-action {
            width: 100%;
            color: #495057;
            text-align: inherit;
          }
          .list-group-item-action:hover, .list-group-item-action:focus {
            z-index: 1;
            color: #495057;
            text-decoration: none;
            background-color: #f8f9fa;
          }
          .list-group-item-action:active {
            color: #212529;
            background-color: #e9ecef;
          }
          
          .list-group-item {
            position: relative;
            display: block;
            padding: 0.5rem 1rem;
            color: #212529;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.125);
          }
          .list-group-item:first-child {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
          }
          .list-group-item:last-child {
            border-bottom-right-radius: inherit;
            border-bottom-left-radius: inherit;
          }
          .list-group-item.disabled, .list-group-item:disabled {
            color: #6c757d;
            pointer-events: none;
            background-color: #fff;
          }
          .list-group-item.active {
            z-index: 2;
            color: #fff;
            background-color: #0d6efd;
            border-color: #0d6efd;
          }
          .list-group-item + .list-group-item {
            border-top-width: 0;
          }
          .list-group-item + .list-group-item.active {
            margin-top: -1px;
            border-top-width: 1px;
          }
          
          .list-group-horizontal {
            flex-direction: row;
          }
          .list-group-horizontal > .list-group-item:first-child {
            border-bottom-left-radius: 0.25rem;
            border-top-right-radius: 0;
          }
          .list-group-horizontal > .list-group-item:last-child {
            border-top-right-radius: 0.25rem;
            border-bottom-left-radius: 0;
          }
          .list-group-horizontal > .list-group-item.active {
            margin-top: 0;
          }
          .list-group-horizontal > .list-group-item + .list-group-item {
            border-top-width: 1px;
            border-left-width: 0;
          }
          .list-group-horizontal > .list-group-item + .list-group-item.active {
            margin-left: -1px;
            border-left-width: 1px;
          }
          
          @media (min-width: 576px) {
            .list-group-horizontal-sm {
              flex-direction: row;
            }
            .list-group-horizontal-sm > .list-group-item:first-child {
              border-bottom-left-radius: 0.25rem;
              border-top-right-radius: 0;
            }
            .list-group-horizontal-sm > .list-group-item:last-child {
              border-top-right-radius: 0.25rem;
              border-bottom-left-radius: 0;
            }
            .list-group-horizontal-sm > .list-group-item.active {
              margin-top: 0;
            }
            .list-group-horizontal-sm > .list-group-item + .list-group-item {
              border-top-width: 1px;
              border-left-width: 0;
            }
            .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
              margin-left: -1px;
              border-left-width: 1px;
            }
          }
          @media (min-width: 768px) {
            .list-group-horizontal-md {
              flex-direction: row;
            }
            .list-group-horizontal-md > .list-group-item:first-child {
              border-bottom-left-radius: 0.25rem;
              border-top-right-radius: 0;
            }
            .list-group-horizontal-md > .list-group-item:last-child {
              border-top-right-radius: 0.25rem;
              border-bottom-left-radius: 0;
            }
            .list-group-horizontal-md > .list-group-item.active {
              margin-top: 0;
            }
            .list-group-horizontal-md > .list-group-item + .list-group-item {
              border-top-width: 1px;
              border-left-width: 0;
            }
            .list-group-horizontal-md > .list-group-item + .list-group-item.active {
              margin-left: -1px;
              border-left-width: 1px;
            }
          }
          @media (min-width: 992px) {
            .list-group-horizontal-lg {
              flex-direction: row;
            }
            .list-group-horizontal-lg > .list-group-item:first-child {
              border-bottom-left-radius: 0.25rem;
              border-top-right-radius: 0;
            }
            .list-group-horizontal-lg > .list-group-item:last-child {
              border-top-right-radius: 0.25rem;
              border-bottom-left-radius: 0;
            }
            .list-group-horizontal-lg > .list-group-item.active {
              margin-top: 0;
            }
            .list-group-horizontal-lg > .list-group-item + .list-group-item {
              border-top-width: 1px;
              border-left-width: 0;
            }
            .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
              margin-left: -1px;
              border-left-width: 1px;
            }
          }
          @media (min-width: 1200px) {
            .list-group-horizontal-xl {
              flex-direction: row;
            }
            .list-group-horizontal-xl > .list-group-item:first-child {
              border-bottom-left-radius: 0.25rem;
              border-top-right-radius: 0;
            }
            .list-group-horizontal-xl > .list-group-item:last-child {
              border-top-right-radius: 0.25rem;
              border-bottom-left-radius: 0;
            }
            .list-group-horizontal-xl > .list-group-item.active {
              margin-top: 0;
            }
            .list-group-horizontal-xl > .list-group-item + .list-group-item {
              border-top-width: 1px;
              border-left-width: 0;
            }
            .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
              margin-left: -1px;
              border-left-width: 1px;
            }
          }
          @media (min-width: 1400px) {
            .list-group-horizontal-xxl {
              flex-direction: row;
            }
            .list-group-horizontal-xxl > .list-group-item:first-child {
              border-bottom-left-radius: 0.25rem;
              border-top-right-radius: 0;
            }
            .list-group-horizontal-xxl > .list-group-item:last-child {
              border-top-right-radius: 0.25rem;
              border-bottom-left-radius: 0;
            }
            .list-group-horizontal-xxl > .list-group-item.active {
              margin-top: 0;
            }
            .list-group-horizontal-xxl > .list-group-item + .list-group-item {
              border-top-width: 1px;
              border-left-width: 0;
            }
            .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
              margin-left: -1px;
              border-left-width: 1px;
            }
          }
          .list-group-flush {
            border-radius: 0;
          }
          .list-group-flush > .list-group-item {
            border-width: 0 0 1px;
          }
          .list-group-flush > .list-group-item:last-child {
            border-bottom-width: 0;
          }
          
          .list-group-item-primary {
            color: #084298;
            background-color: #cfe2ff;
          }
          .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
            color: #084298;
            background-color: #bacbe6;
          }
          .list-group-item-primary.list-group-item-action.active {
            color: #fff;
            background-color: #084298;
            border-color: #084298;
          }
          
          .list-group-item-secondary {
            color: #41464b;
            background-color: #e2e3e5;
          }
          .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
            color: #41464b;
            background-color: #cbccce;
          }
          .list-group-item-secondary.list-group-item-action.active {
            color: #fff;
            background-color: #41464b;
            border-color: #41464b;
          }
          
          .list-group-item-success {
            color: #0f5132;
            background-color: #d1e7dd;
          }
          .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
            color: #0f5132;
            background-color: #bcd0c7;
          }
          .list-group-item-success.list-group-item-action.active {
            color: #fff;
            background-color: #0f5132;
            border-color: #0f5132;
          }
          
          .list-group-item-info {
            color: #055160;
            background-color: #cff4fc;
          }
          .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
            color: #055160;
            background-color: #badce3;
          }
          .list-group-item-info.list-group-item-action.active {
            color: #fff;
            background-color: #055160;
            border-color: #055160;
          }
          
          .list-group-item-warning {
            color: #664d03;
            background-color: #fff3cd;
          }
          .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
            color: #664d03;
            background-color: #e6dbb9;
          }
          .list-group-item-warning.list-group-item-action.active {
            color: #fff;
            background-color: #664d03;
            border-color: #664d03;
          }
          
          .list-group-item-danger {
            color: #842029;
            background-color: #f8d7da;
          }
          .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
            color: #842029;
            background-color: #dfc2c4;
          }
          .list-group-item-danger.list-group-item-action.active {
            color: #fff;
            background-color: #842029;
            border-color: #842029;
          }
          
          .list-group-item-light {
            color: #636464;
            background-color: #fefefe;
          }
          .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
            color: #636464;
            background-color: #e5e5e5;
          }
          .list-group-item-light.list-group-item-action.active {
            color: #fff;
            background-color: #636464;
            border-color: #636464;
          }
          
          .list-group-item-dark {
            color: #141619;
            background-color: #d3d3d4;
          }
          .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
            color: #141619;
            background-color: #bebebf;
          }
          .list-group-item-dark.list-group-item-action.active {
            color: #fff;
            background-color: #141619;
            border-color: #141619;
          }
          .fw-bold {
            font-weight: 700 !important;
          }
          .badge {
            display: inline-block;
            padding: 0.35em 0.65em;
            font-size: 0.75em;
            font-weight: 700;
            line-height: 1;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
          }
          .badge:empty {
            display: none;
          }
          
          .btn .badge {
            position: relative;
            top: -1px;
          }
          .rounded-pill {
            border-radius: 50rem !important;
          }
          .bg-success {
            background-color: #198754 !important;
          }
          .d-flex {
            display: flex !important;
          }
          .justify-content-between {
            justify-content: space-between !important;
          }
          .align-items-start {
            align-items: flex-start !important;
          }
          .ms-2 {
            margin-left: 0.5rem !important;
          }
          .me-auto {
            margin-right: auto !important;
          }                    
          


    }
    
    /* END RESPONSIVE STYLES */
    .es-p-default {
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 0px;
        padding-left: 20px;
    }
    
    .es-p-all-default {
        padding: 0px;
    }
    </style>
    </body>
    
    </html> `

    return HTML
}


// Cria a estrutura de HTML Da Lista Para o email
function ListaPedidoHTML(ArrayRequisição){

    Obj = ArrayRequisição

    if (Obj) {

        let i = 0
        let Tamanho = Obj.length
        let HTML = ""
        while (i < Tamanho) {

            HTML = HTML + 
            `
            <li class="list-group-item d-flex justify-content-between list-group-item-action align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold" style="text-align: left; margin-left: 0px !important;">${Obj[i].Material}</div>
                ${ Obj[i].Desc}
            </div>
            <span class="badge bg-primary rounded-pill">${Obj[i].Quantidade}</span>
            </li>
            `

            i = i + 1
        }

        let Lista = `
            <div class="card" style="width: 100%;">
            <div class="card-header">
             ${Obj[0].Nome}
            </div>
            <ol class="list-group list-group-numbered">
                ${HTML}
            </ol>
            </div>
             `
     return Lista
    }
    
}


module.exports = {
    PageEmail,
    ListaPedidoHTML
}