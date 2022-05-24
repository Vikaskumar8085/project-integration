import React, { Component } from 'react'
import Search from './Component_parts/Search'

export default class Home extends Component {
  render() {
    const articledata=[
        {
    name:'Simple and useful HTML layout',
    span:"New",
    images:"img/img-01.jpg",
    travel:"Travel . Events",
    year:"June 24, 2020",
    comment:"36 comments",
    admin:"by Admin Nat",
    description:"There is a clickable image with beautiful hover effect and active title link for each post item. Left side is a sticky menu bar. Right side is a blog content that will scroll up and down."
        },
        {
            name:'Multi-purpose blog template',
            span:"New",
            images:"img/img-02.jpg",
            travel:"Creative . Design . Business",
            year:"June 24, 2020",
            comment:"48 comments",
            admin:"by Admin Sam",
            description:" is a multi-purpose HTML CSS template from TemplateMo website.Blog list, single post, about, contact pages are included. Left sidebar fixed width and content area is a fluid full-width."
                },
                {
                    name:'How can you apply Xtra Blog',
                    span:"New",
                    images:"img/img-03.jpg",
                    travel:"Music . Audio",
                    year:"June 11, 2020",
                    comment:"26 comments",
                    admin:"by John Walker",
                    description:"You are <u>allowed</u> to convert this template as any kind of CMS theme or template for your custom website builder. You can also use this for your clients. Thank you for choosing us."
                        },
                        {
                            name:'A little restriction to apply',
                            span:"New",
                            images:"img/img-04.jpg",
                            travel:"Artworks . Design",
                            year:"June 4, 2020",
                            comment:"72 comments",
                            admin:"by Admin Sam",
                            description:" You are not allowed to re-distribute this template as a downloadable ZIP file on any template collection website. This is strongly prohibited as we worked hard for this template. Please contact TemplateMo for more information."
                                },
                                {
                                    name:'Color hexa values of Xtra Blogy',
                                    span:"New",
                                    images:"img/img-06.jpg",
                                    travel:"Creative . Video . Audio",
                                    year:"May 31, 2020",
                                    comment:"84 comments",
                                    admin:"by Admin Sam",
                                    description:" If you wish to kindly support us, please contact us or contribute a small PayPal amount to info [at] templatemo.com that is helpful for us.<br/>Title #099 New #0CC <br/><span className='tm-color-primary'>Text #999 Line #CCC Next #0CC Prev #F0F0F0</span>"
                                        },
                                        {
                                            name:'Donec convallis varius risus',
                                            span:"New",
                                            images:"img/img-06.jpg",
                                            travel:"Visual . Artworks ",
                                            year:"June 16, 2020",
                                            comment:"96 comments",
                                            admin:"by Admin Sam",
                                            description:"   Quisque id ipsum vel sem maximus vulputate sed quis velit. Nunc vel turpis eget orci elementum cursus vitae in eros. Quisque vulputate nulla ut dolor consectetur luctus."
                                                },
        ]
    return (
    <div class="container-fluid">
    <main class="tm-main">
        {/* <!-- Search form --> */}
        <div class="row tm-row">
            <div class="col-12">
                <Search/>
            </div>                
    </div>            
        <div class="row tm-row">

                { articledata.map( artdata =>{
            
        return    <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary"/>
                <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                    <div class="tm-post-link-inner">
                        <img src={artdata.images} alt="Image" class="img-fluid"/>                            
                    </div>
                    <span class="position-absolute tm-new-badge">{artdata.span}</span>
                    <h2 class="tm-pt-30 tm-color-primary tm-post-title">{artdata.name}</h2>
                </a>                    
                <p class="tm-pt-30">
                    {artdata.description}
                </p>
                <div class="d-flex justify-content-between tm-pt-45">
                    <span class="tm-color-primary">{artdata.travel}</span>
                    <span class="tm-color-primary">{artdata.year}</span>
                </div>
                <hr/>
                <div class="d-flex justify-content-between">
                    <span>{artdata.comment}</span>
                    <span>{artdata.admin}</span>
                </div>
            </article>
            }
            )}
            </div>
        <div class="row tm-row tm-mt-100 tm-mb-75">
            <div class="tm-prev-next-wrapper">
                <a href="#" class="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20">Prev</a>
                <a href="#" class="mb-2 tm-btn tm-btn-primary tm-prev-next">Next</a>
            </div>
            <div class="tm-paging-wrapper">
                <span class="d-inline-block mr-3">Page</span>
                <nav class="tm-paging-nav d-inline-block">
                    <ul>
                        <li class="tm-paging-item active">
                            <a href="#" class="mb-2 tm-btn tm-paging-link">1</a>
                        </li>
                        <li class="tm-paging-item">
                            <a href="#" class="mb-2 tm-btn tm-paging-link">2</a>
                        </li>
                        <li class="tm-paging-item">
                            <a href="#" class="mb-2 tm-btn tm-paging-link">3</a>
                        </li>
                        <li class="tm-paging-item">
                            <a href="#" class="mb-2 tm-btn tm-paging-link">4</a>
                        </li>
                    </ul>
                </nav>
            </div>                
        </div>            
        
    </main>
</div>
    )
  }
}
