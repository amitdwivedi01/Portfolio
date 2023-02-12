export default {
    name:"testimonals",
    title:"Testimonals",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"company",
            title:"Company",
            type:"string"
        },
        {
            name:"imageurl",
            title:"imgURL",
            type:"image",
            options:{
                hotspot: true,
            }
        },  
        {
            name:"feedback",
            title:"Feedback",
            type:"string"
        },

    ]
}