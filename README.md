# Robert's Personal Website

[robertlupoiu.com](http://www.robertlupoiu.com)

Wanting a **minimalist, future-proof website**, I worked with [ChatGPT-3.5](https://chat.openai.com) to generate raw HTML, CSS, and JavaScript (with no frameworks, to avoid future versioning obsolescence issues). The website currently contains a section for a profile picture with a link to socials, a bio, and a list of publications. The publications section allows for a representative image and optional links to a PDF, the publisher's website, a video, the code repository, data used in the study, a project website, and a slideset. Each study also has a BibTeX citation button, which allows the user to easily copy the citation to their clipboard, **making citing the articles as easy and painless as possible**.

## How to adapt for your own use

After forking this repository, perform the following steps to adapt the website for your own use:

1. In `/index.html`:

    1. Change the header title of the page (line 6)
    2. Change (or remove) the Stanford favicon if needed (line 19-20)
    3. Change the alternative text for the profile picture (line 37)
    4. Change the biographical information (lines 40-43)
    5. Change the links to your socials (lines 48, 55, 78, 86)
    6. Change the biographical text (line 101)
    7. Change the acknowledgment text--it would be great if you link back here (https://github.com/rclupoiu/www_personal) so that others can also benefit from this code! (line 152)
   
</br>

2. In the `/publications/` directory:

    1. Upload a representative image for each study you want to list on the website in `/publications/images/`
    2. Upload the PDF for each study you want to list on the website in `/publications/pdfs/`
    3. In `/publications/list.js`, Remove my publications and add your own. Note that there is an empty template at the bottom of the file (lines 148-174) you can use. The following fields are required: `imageSrc`, `title`, `authors`, `journal`, `bibtexData`, `selected`. The following fields are optional: `pdfLink`, `journalLink`, `videoLink`, `codeLink`, `dataLink`, `websiteLink`, `slidesLink`. The `image` field should be the directory of the representative image you uploaded in step 2.1. The `pdf` field should be the directory of the PDF you uploaded in step 2.2. The `videoLink`, `codeLink`, `dataLink`, `websiteLink`, and `slidesLink` fields should be the URLs to the respective resources. If you don't have a URL for a particular resource, just leave the field blank and the button will not appear for that listing. If the `selected` field is set to `true`, the study will be listed in the "Selected" tab. All publications will be listed in the "All" tab.

## How to host for free (for Stanford students/employees)

Stanford University IT provides free WWW hosting for Stanford students and employees, with a URL of the form `https://web.stanford.edu/~yoursunetid/`.

UIT provides instructions on how to set up your website here:
https://uit.stanford.edu/service/web/centralhosting/howto_user

The bottom line is that you need to place your website files in the `~/WWW` directory of your AFS space, at `<your-sunet-id>@cardinal.stanford.edu:~/WWW`. Note that the server supports the GitHub CLI. You can also work locally and transfer the files to the server by using the `scp` command in your local terminal, or by using a GUI like [Cyberduck](https://cyberduck.io) or [FileZilla](https://filezilla-project.org). The `index.html` file needs to be in the `~/WWW` directory for your website to show up at `https://web.stanford.edu/~yoursunetid/`.

## How to host for free (for everyone else)

GitHub provides free website hosting, with a URL of the form `https://username.github.io` or a custom URL, like [www.robertlupoiu.com](http://www.robertlupoiu.com/) (I bought my custom domain from [Name Silo](https://www.namesilo.com), which had the cheapest prices at the time).

Instructions for setting this up can be found here:
https://pages.github.com

## Acknowledgements

### Website design
- Website design adapted from [Martin Saveski](http://www.martinsaveski.com/)

### Icons
- X (FKA Twitter), GitHub, and LinkedIn logos from [Font Awesome](https://fontawesome.com/)
- Google Scholar logo from [icons8](https://icons8.com/)

### Tabs code
- Publications tabs code provided by [Nathan Cahill](https://github.com/nathancahill/skeleton-tabs)