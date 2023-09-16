// publications/list.js
const publicationsList = [

    //Machine Learning Advances in Computational Electromagnetics (Wiley book chapter)
    {
        imageSrc: 'publications/images/lupoiu2023machine.png',
        title: 'Machine Learning Advances in Computational Electromagnetics (Book Chapter)',
        authors: '<strong>Robert Lupoiu</strong> and Jonathan A. Fan',
        journal: 'Advances in Electromagnetics Empowered by Artificial Intelligence and Deep Learning, John Wiley & Sons, Inc., 2023.',
        pdfLink: 'publications/pdfs/lupoiu2023machine.pdf',
        journalLink: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/9781119853923.ch7',
        videoLink: '',
        codeLink: '',
        dataLink: '',
        websiteLink: '',
        slidesLink: '',
        bibtexData: 
`@inbook{lupoiu2023machine,
author = {Lupoiu, Robert and Fan, Jonathan A.},
publisher = {John Wiley & Sons, Ltd},
isbn = {9781119853923},
title = {Machine Learning Advances in Computational Electromagnetics},
booktitle = {Advances in Electromagnetics Empowered by Artificial Intelligence and Deep Learning},
chapter = {7},
pages = {225--252},
doi = {10.1002/9781119853923.ch7},
url = {https://onlinelibrary.wiley.com/doi/abs/10.1002/9781119853923.ch7},
eprint = {https://onlinelibrary.wiley.com/doi/pdf/10.1002/9781119853923.ch7},
year = {2023},
}`,
        selected: true, // Indicate whether the study is selected
    },

    //Original WaveY-Net paper
    {
        imageSrc: 'publications/images/chen2022high.webp',
        title: 'High Speed Simulation and Freeform Optimization of Nanophotonic Devices with Physics-Augmented Deep Learning',
        authors: 'Mingkun Chen*, <strong>Robert Lupoiu*</strong>, Chenkai Mao*, Der-Han Huang*, Jiaqi Jiang, Philippe Lalanne and Jonathan A. Fan',
        journal: 'ACS Photonics, 2022.',
        pdfLink: 'publications/pdfs/chen2022high.pdf',
        journalLink: 'https://doi.org/10.1021/acsphotonics.2c00876',
        videoLink: 'https://twitter.com/robertlupoiu/status/1703178432841142495',
        codeLink: 'https://github.com/jonfanlab/waveynet',
        dataLink: 'http://metanet.stanford.edu/search/waveynet-study/',
        websiteLink: '',
        slidesLink: '',
        bibtexData: 
`@article{chen2022high,
author = {Chen, Mingkun and Lupoiu, Robert and Mao, Chenkai and Huang, Der-Han and Jiang, Jiaqi and Lalanne, Philippe and Fan, Jonathan A.},
title = {High Speed Simulation and Freeform Optimization of Nanophotonic Devices with Physics-Augmented Deep Learning},
journal = {ACS Photonics},
volume = {9},
number = {9},
pages = {3110--3123},
year = {2022},
publisher = {American Chemical Society},
doi = {10.1021/acsphotonics.2c00876},
URL = {https://pubs.acs.org/doi/abs/10.1021/acsphotonics.2c00876},
}`,
        selected: true, // Indicate whether the study is selected
    },

    //Automated SiDB circuit designer paper
    {
        imageSrc: 'publications/images/lupoiu2022automated.png',
        title: 'Automated Atomic Silicon Quantum Dot Circuit Design via Deep Reinforcement Learning',
        authors: '<strong>Robert Lupoiu</strong>, Samuel S. H. Ng, Jonathan A. Fan and Konrad Walus',
        journal: 'arXiv, 2022.',
        pdfLink: 'publications/pdfs/lupoiu2022automated.pdf',
        journalLink: 'https://doi.org/10.48550/arXiv.2204.06288',
        videoLink: '',
        codeLink: '',
        dataLink: '',
        websiteLink: '',
        slidesLink: '',
        bibtexData: 
`@article{lupoiu2022automated,
author = {Lupoiu, Robert and Ng, Samuel S. H. and Fan, Jonathan A. and Walus, Konrad},
title = {Automated Atomic Silicon Quantum Dot Circuit Design via Deep Reinforcement Learning},
journal = {arXiv},
year = {2022},
eprint = {arXiv:2204.06288},
doi = {10.48550/arXiv.2204.06288},
URL = {https://arxiv.org/abs/2204.06288},
}`,
        selected: false, // Indicate whether the study is selected
    },

    //Metanet paper
    {
        imageSrc: 'publications/images/jiang2020metanet.png',
        title: 'MetaNet: a new paradigm for data sharing in photonics research',
        authors: 'Jiaqi Jiang, <strong>Robert Lupoiu</strong>, Evan W. Wang, David Sell, Jean-Paul Hugonin, Philippe Lalanne and Jonathan A. Fan',
        journal: 'Optica Express, 2020.',
        pdfLink: 'publications/pdfs/jiang2020metanet.pdf',
        journalLink: 'https://doi.org/10.1364/OE.388378',
        videoLink: '',
        codeLink: '',
        dataLink: '',
        websiteLink: 'http://metanet.stanford.edu',
        slidesLink: '',
        bibtexData: 
`@article{jiang2020metanet,
author = {Jiang, Jiaqi and Lupoiu, Robert and Wang, Evan W. and Sell, David and Hugonin, Jean-Paul and Lalanne, Philippe and Fan, Jonathan A.},
title = {MetaNet: a new paradigm for data sharing in photonics research},
journal = {Opt. Express},
volume = {28},
number = {9},
pages = {13670--13681},
year = {2020},
publisher = {Optica Publishing Group},
doi = {10.1364/OE.388378},
URL = {https://opg.optica.org/oe/abstract.cfm?URI=oe-28-9-13670},
}`,
        selected: true, // Indicate whether the study is selected
    },

    //SiQAD paper
    {
        imageSrc: 'publications/images/ng2020siqad.png',
        title: 'SiQAD: A Design and Simulation Tool for Atomic Silicon Quantum Dot Circuits',
        authors: 'Samuel S. H. Ng, Jacob Retallick, Hsi Nien Chiu, <strong>Robert Lupoiu</strong>, Lucian Livadaru, Taleana Huff, Mohammad Rashidi, Wyatt Vine, Thomas Dienel, Robert A. Wolkow and Konrad Walus',
        journal: 'IEEE Transactions on Nanotechnology, 2020.',
        pdfLink: 'publications/pdfs/ng2020siqad.pdf',
        journalLink: 'https://doi.org/10.1109/TNANO.2020.2966162',
        videoLink: '',
        codeLink: 'https://github.com/siqad/siqad',
        dataLink: '',
        websiteLink: '',
        slidesLink: '',
        bibtexData: 
`@article{ng2020siqad,
author = {Ng, Samuel S. H. and Retallick, Jacob and Chiu, Hsi Nien and Lupoiu, Robert and Livadaru, Lucian and Huff, Taleana and Rashidi, Mohammad and Vine, Wyatt and Dienel, Thomas and Wolkow, Robert A. and Walus, Konrad},
title = {SiQAD: A Design and Simulation Tool for Atomic Silicon Quantum Dot Circuits},
journal = {IEEE Transactions on Nanotechnology},
volume = {19},
number = {},
pages = {137--146},
year = {2020},
publisher = {IEEE},
doi = {10.1109/TNANO.2020.2966162},
URL = {https://ieeexplore.ieee.org/abstract/document/8963859},
}`,
        selected: true, // Indicate whether the study is selected
    },

    
//     {
//         imageSrc: 'publications/images/',
//         title: '',
//         authors: '<strong>Robert Lupoiu</strong>',
//         journal: '.',
//         pdfLink: 'publications/pdfs/',
//         journalLink: '',
//         videoLink: '',
//         codeLink: '',
//         dataLink: '',
//         websiteLink: '',
//         slidesLink: '',
//         bibtexData: 
// `@article{,
// author = {},
// title = {},
// journal = {},
// volume = {},
// number = {},
// pages = {},
// year = {},
// publisher = {},
// doi = {},
// URL = {},
// }`,
//         selected: true, // Indicate whether the study is selected
//     },

];

export default publicationsList;
