const data = {
    headerMenus: [
        {
            name: "Today's Deals",
            href: '/search?tag=todays-deal',
        },
        {
            name: 'New Arrivals',
            href: '/search?tag=new-arrival',
        },
        {
            name: 'Featured Products',
            href: '/search?tag=featured',
        },
        {
            name: 'Best Sellers',
            href: '/search?tag=best-seller',
        },
        {
            name: 'Browsing History',
            href: '/#browsing-history',
        },
        {
            name: 'Customer Service',
            href: '/page/customer-service',
        },
        {
            name: "About Us",
            href: '/page/about-us',
        },
        {
            name: 'Help',
            href: '/page/help',
        },
    ],
    carousels: [
        {
            title: 'Most Popular Shoes for Sale',
            buttonCaption: 'Shop Now',
            image: '/images/banner3.jpg',
            url: '/search?category=shoes',
            isPublished: true,
        },  
        {
            title: 'Best Sellers in T-shirts',
            buttonCaption: 'Shop Now',
            image: '/images/banner1.jpg',
            url: '/search?category=T-shirts',
            isPublished: true,
        },
        {
            title: 'Best Sellers in Wrist Watches',
            buttonCaption: 'See More',
            image: '/images/banner2.jpg',
            url: '/search?category=Wrist Watches',
            isPublished: true,
        },
    ],
}

export default data