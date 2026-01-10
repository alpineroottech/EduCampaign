export type NoticeEventType = 'event' | 'notice';

export type NoticeEvent = {
    id: string;
    type?: NoticeEventType;
    title: string;
    imageSrc: string;
    openingImg?: string;
    date: string;
    endDate?: string;
    location?: string;
    description: string;
    slug: string;
};

export const NOTICE_EVENTS: NoticeEvent[] = [
    {
        id: '1',
        type: 'event',
        title: 'Gateway to Japan 2026: Study, Explore, Succeed',
        imageSrc: '/images/noticeandevents/image.png',
        openingImg: '/images/noticeandevents/GatewayToJapan.png',
        date: '2026/02/01',
        endDate: '2026/02/28',
        location: 'Edu. Campaign Pvt. Ltd., Dillibazar, Kathmandu',
        description: 'Japan is opening doors for international students with world-class universities, cutting-edge technology, and rich cultural experiences. This event is designed exclusively for Nepali students who dream of studying in Japan in 2026. Meet representatives from top Japanese universities, learn about MEXT, JASSO, and other scholarships, and get step-by-step guidance on visa procedures and language requirements.',
        slug: '/',
    },
    {
        id: '2',
        type: 'notice',
        title: 'Merry Christmas!',
        imageSrc: 'https://images.unsplash.com/photo-1697105870545-7b274b03b39c?q=80&w=1170',
        openingImg :'/images/noticeandevents/MerryChristmas.png',
        date: 'December 25, 2025',
        description: 'Edu Campaign Pvt. Ltd., Dillibazar, Kathmandu, extends its warmest Christmas wishes to all our students, partners, and well-wishers. May this festive season bring peace, joy, and success to you and your family. Merry Christmas and Happy Holidays!',
        slug: '/',
    },
    {
        id: '3',
        type: 'notice',
        title: 'Notice of Relocation',
        imageSrc: 'https://images.unsplash.com/photo-1704655295066-681e61ecca6b?q=80&w=1974',
        openingImg :'/images/noticeandevents/NoticeofRelocation.png',
        date: 'August 17, 2025',
        description: 'We are pleased to inform valued customers, stakeholders and partners that Edu. Campaign Pvt. Ltd. has successfully relocated to a new facility to serve you better. Our new address: Dillibazar-30, Gurjumarga, Kathmandu. Phone: 014500074, Email: educampaign2008@gmail.com. All services are being provided as usual.',
        slug: '/',
    },
];
