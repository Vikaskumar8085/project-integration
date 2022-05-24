import React, { Component } from 'react'
import Footer from './Component_parts/Footer'
import Search from './Component_parts/Search'
export default class About extends Component {


render() {
    const data=[
    {
name:'Background',
description:'Phasellus pulvinar nisl ornare leo porttitor, et vestibulum lorem semper. Duis risus ex, molestie sit amet magna in, pharetra pellentesque est. Curabitur elit metus.'
    },
    {
    
        name:'Teamwork',
        description:'Suspendisse ullamcorper, mi vel molestie ornare, arcu magna euismod ipsum, in malesuada nulla magna ut enim. Morbi lacinia magna sed auctor, vitae nunc cursus.'
            },
            {
            name:'Our Core Value',

            description:'Nunc mi ante, suscipit vel dapibus et, volutpat sit amet ante. In tempor nec sem vitae varius. Aliquam tincidunt orci sem, et imperdiet massa consectetur nec.'
    }
    
    ]

    const newdata=[
        {
    name:'John Henry',
    subtitle:"CEO/Founder",
    images:"img/about-02.jpg",
    description:'Aliquam non vulputate lectus, vel ultricies diam. Suspendisse at ipsum hendrerit, vestibulum mi id, mattis tortor.'
        },
        {
        
            name:'Timy Cake',
    subtitle:"Project Director",
    images:"img/about-03.jpg",
            description:'Quisque in bibendum elit, in egestas turpis. Vestibulum ornare sollicitudin congue. Aliquam lorem mi, maximus at iaculis ut.'
                },
                {
                name:'Jay Zoona',
                subtitle:"Supervisor",
                images:"img/about-04.jpg",
                description:'Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac turpis eleifend, commodo purus eget, commodo mauris.'
        },
        {
            name:'Catherine Softs',
            subtitle:"Team Leader",
            images:"img/about-05.jpg",
            description:'Integer eu sapien hendrerit, imperdiet arcu sit amet, sollicitudin ipsum. Phasellus consequat suscipit ligula eget bibendum.'
    }
        
        ]
    return (
<>
<div class="container-fluid">
        <main class="tm-main">
            {/* <!-- Search form --> */}
            <div class="row tm-row">
                <div class="col-12">
                <Search/>
                </div>                
            </div>            
            <div class="row tm-row tm-mb-45">
                <div class="col-12">
                    <hr class="tm-hr-primary tm-mb-55"/>
                    <img src="img/about-01.jpg" alt="Image" class="img-fluid"/>
                </div>
            </div>
            <div class="row tm-row tm-mb-40">
                <div class="col-12">                    
                    <div class="mb-4">
                        <h2 class="pt-2 tm-mb-40 tm-color-primary tm-post-title">About this xtra blog</h2>
                        <p>
                            You can immediately download 
                                <a rel="nofollow" href="https://templatemo.com/tm-553-xtra-blog" target="_blank">Xtra Blog Template</a> 
                                from TemplateMo website for 100% free of charge. Etiam vehicula, tortor ac eleifend tincidunt, diam neque pellentesque ipsum, 
                                a geugiat eros mauris eget lorem. Quisque in
                            bibendum elit, in egestas turpis. Vestibulum ornare sollicitudin congue. Aliquam lorem mi, maximus at iaculis ut, viverra vel
                            mauris. Duis congue luctus metus, sodales tincidunt lectus fringilla ut. Nunc tempus at magna sed vestibulum.
                        </p>
                        <p>
                            Proin et arcu ligula. Praesent quis erat eu est solliditudin tristique ut in arcu. Donec bibendum ex id ligula semper dictum.
                            Proin malesuada luctus auctor. Suspendisse ullamcorper, mi vel molestie ornare, arcu magna euismod ipsum, in
                            malesuada nulla magna ut enim. Morbi lacinia magna sed sapien auctor, vitae luctus nunc cursus.
                        </p>                            
                    </div>                    
                </div>
            </div>
            <div class="row tm-row tm-mb-120">
                                { data.map( medata=>{
                            
                                    return <div class="col-lg-4 tm-about-col">
                            <div class="tm-bg-gray tm-about-pad">
                            <div class="text-center tm-mt-40 tm-mb-60">
                                <i class="fas fa-bezier-curve fa-4x tm-color-primary"></i>                            
                        </div> 
                        <h2 class="mb-3 tm-color-primary tm-post-title">{medata.name}</h2>
                            <p class="mb-0 tm-line-height-short">{medata.description}</p>
                        </div>
                        </div>
                        })}                          
            </div>            
            <div class="row tm-row tm-mb-60">
                <div class="col-12">
                    <hr class="tm-hr-primary  tm-mb-55"/>
                </div>                
            {newdata.map(mydata=>{
return   <div class="col-lg-6 tm-mb-60 tm-person-col">
 <div class="media tm-person">
    <img src={mydata.images} alt="Image" class="img-fluid mr-4"/>
    <div class="media-body">
    <h2 class="tm-color-primary tm-post-title mb-2">{mydata.name}</h2>
        <h3 class="tm-h3 mb-3">{mydata.subtitle}</h3>
        <p class="mb-0 tm-line-height-short">
        {mydata.description}
        </p>
    </div>
 </div>
</div>


            })}
            
                
            
            </div>         
        <Footer/>
        </main>
    </div>
    
    
    </>
    )
}
}
