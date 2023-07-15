export default{
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields:[
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },{
            name: 'alt',
            title: 'Description',
            type: 'string'
        }
    ]
}