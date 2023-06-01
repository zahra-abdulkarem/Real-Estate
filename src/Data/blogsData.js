import mecca from '../images/blogs/mecca.jpg'
import sudan from '../images/blogs/sudan.jpg'
import BuildingVilla from '../images/blogs/villa-8.jpg'
import window from '../images/blogs/apartment-4.jpg'
import tourism from '../images/blogs/tourism.jpg'
import land from '../images/blogs/Land-1.jpg'



const blogData = [
    {
        id: 1,
        image: mecca,
        alt: "mecca",
        title: "Religious Tourism In Mecca And The Best Hotels In Mecca",
        blogText1: "With An Enviable Location At The Front Of The Clock Towers Complex And Overlooking Al Masjid Al Haram And The Holy Kaaba, The 5-Star Al Marwa Rayhaan By Rotana Offers Guests Both Comfort And Convenience During Their Stay And Is An Ideal Base For Visiting Pilgrims. Our Brand Name, Rayhaan, Refers To An Aromatic Plant Mentioned In The Holy Quran And Reflects How Our Style Of Hospitality Respects The Culture And Beliefs Of Our Guests Visiting Makkah.",
        blogText2: "The Hotel’s 503 Rooms And Suites Have Been Designed And Furnished With The Values And Tastes Of The Modern Arabian Culture In Mind. Many Of These 5 Star Rooms And Suites Offer Guests Unique And Uplifting Views Of Makkah’s Most Important Holy Site.",
        blogText3: "The Spiritual Journey Continues Inside Our Four Unique Dining Venues, Which Most Of Them Also Overlook Al Haram Shareef. Al Shorfa Restaurant Is The Place To Enjoy À La Carte Cuisine On The 11th-Floor Terrace In Full View Of The Holy Kaaba, While Our All-Day Dining Outlets Spoil Guests For Choice With Their Wide Range Of Tempting International Cuisine.",
        views: "6.2K ViewsView . Upvotes"
    },
    {
        id: 2,
        image: sudan,
        alt: "sudan",
        title: "Tourist Places In Sudan",
        blogText1: "There Are Many Historical Monuments In Sudan That Reflect The Different Civilizations That Passed Through The Country, Starting With The Effects Of The Nubia In The North, The Effects Of The Fur Sultanate In The West, The Funj In The Center, And Then The Colonial And Mahdist Monuments In All Parts Of Sudan.",
        blogText2: "Jebel Marra: A Volcanic Lake Above The Crater Of Jebel Marra Jebel Marra Is A Tourist Attraction In The Darfur Region, And It Is Characterized By The Diversity Of Its Plants And Wildlife In It, In Addition To The Presence Of A Volcanic Crater On Its Summit With Two Lakes. The Reserve Is Considered One Of The Largest Breeding Grounds For Endemic Birds And Migratory Birds In Sudan, Especially Geese, Ducks, Houbara Bustards And Storks. It Has Sulfuric Waters And Areas Suitable For Photography Enthusiasts, Adventure Enthusiasts And Rugged Nature.",
        views: "9.1K ViewsView . Upvotes"
    },
    {
        id: 3,
        image: BuildingVilla,
        alt: "Building Villa",
        title: "Home Renovation: Will It Go Back To How It Was?",
        blogText1: "Remodeling Certain Areas Of A Single-Family House Is An Excellent Way For Homeowners To Add Increased Functionality And Beauty To A Property At Someone Else's Expense. By Choosing The Right Project To Enhance Your Living Space, A Significant Portion Of The Expense Can Be Passed On To Future Owners In The Form Of Increased Property Values.",
        views: "6.9K ViewsView . Upvotes"
    },
    {
        id: 4,
        image: window,
        alt: "window",
        title: "Buildings Depend On Solar Energy",
        blogText1: "In The Early Days Of Solar Panels, The Photovoltaic Energy They Produced Most Frequently Was Exported To The Grid For Distribution Rather Than Being Used Directly On-Site. Today That Model Is On The Decline In Favor Of The Self-Consumption Of Solar Energy By The Building To Which The Solar Panels Are Attached.",
        blogText2: "Why Does This Matter? Quite Simply Because The Details Of How The Photovoltaic Equipment Is Installed—Especially The Electrical Distribution System—Can Be Quite Different, Depending Which Alternative You Select.",
        blogText3: "A New Video Series Produced By Schneider Electric’s Technical Communication And Training Group Offers Clear Explanations Of The Many Factors That Must Be Considered When Planning To Add Solar Production To A Building’s Electrical Installation.",
        blogText4: "The First Video In The Series “Photovoltaic Self-Consumption Brings Fundamental Changes In The Electrical Installation,” Provides An Overview Of The Way Export-To-Grid And Self-Consumption PV Systems Are Set.It Also Explains Three Fundamental Changes That Occur When The Choice Is Made To Self-Consume The PV Energy.",
        views: "5.1K ViewsView . Upvotes"
    },
    {
        id: 5,
        image: tourism,
        alt: "tourism",
        title: "The Best Global Tourist Sites",
        blogText1: "New Zealand's South Island Brims With Majestic Landscapes At Every Turn, From Dramatic Mountains To Spectacular Fjords. Here, You Can Admire The Mountains Of Fiordland National Park, A UNESCO World Heritage Site, From Hiking Trails Or A Boat On Milford Sound. At Night, Journey To The University Of Canterbury's Mount John Observatory To Gaze At The Starry Skies. You Can Also Indulge Your Inner Daredevil In Queenstown (A Favorite Destination Among Bungee Jumpers), Sample Delicious Sauvignon Blanc Wine In The Marlborough Region Or Explore New Zealand's Most Accessible Glaciers – Franz Josef And Fox Glacier – On The Island's West Coast.",
        blogText2: "The Magnetic City Of Light Draws Visitors From Around The Globe Who Come To See Iconic Attractions Like The Eiffel Tower, The Louvre And The Arc De Triomphe. But What Travelers Really Fall In Love With Are The City's Quaint Cafes, Vibrant Markets, Trendy Shopping Districts And Unmistakable Je Ne Sais Quoi. Get Lost Wandering Along The Charming Cobblestone Streets, Or Grab A Croissant And Relax On The Banks Of The Seine For Hours. If You're Up For A Quick Daytrip, Head About 15 Miles Southwest Of The City Center To The Palace Of Versailles, Which Offers Guided And Self-Guided Tours Of The Estate.",
        blogText3: "Whether You're Driving Along The Road To Hana, Enjoying A Bird's-Eye View Of Maui's Lush Coastline From A Helicopter, Snorkeling With Sea Turtles Or Simply Relaxing On White Or Black Sand Beaches, You'll Find That This Hawaiian Island Is Unlike Any Other Tropical Destination. Don't Miss A Chance To Visit Haleakala National Park, Which Is Home To One Of The World's Largest Dormant Volcanic Craters. You Should Also Attend A Luau For A Dose Of Local Culture And A Taste Of Hawaiian Specialties Like Poi, Poke And Mahimahi.",
        views: "3.8K ViewsView . Upvotes"
    },
    {
        id: 6,
        image: land,
        alt: "land",
        title: "Why Do Many People Prefer To Buy Lands Far From The City?",
        blogText1: "Best Use For The Investor? Smart Investors - Those With Some Knowledge And Strategy - Can Invest Very Well In Land And Real Estate. A Lot Of Fortunes Have Been Built On Real Estate, And Many Other People Have Done Really Well In The Real Estate Business.",
        blogText2: "Many People Also Invest In The Stock Market, Or Other Financial Markets, And That’s Fine, Too. But I Wouldn’t Call It “Better.” I’m Only Guessing, But I Suspect It’s Far Easier To Lose A Lot Of Money In The Stock Market Than It Is In Real Estate.",
        blogText3: "A Lot Of People Try To Start Their Own Companies. Is That A “Better Use”? Most Start-Ups Fail, Resulting In Financial Loss For The Founders. It May Have Been A “Better Use” In That The Founder Had A Vision, A Goal, And Could Work Directly On Achieving That Goal. But The Marketplace—The Customers For The Person’s Products Or Services—Determined That It Wasn’t What It Was Looking For.",
        blogText4: "So: Do You Mean Better Use In Something That Will Better Benefit Society? What Better Benefits Society Than Providing Places For People To Live And Work? It May Refer To Something Altruistic, Such As Donating Money To Medical Research. (Although Your Question Doesn't Really Suggest It.) This Might Be A Better Use, But You Have To Make The Money In Some Way Before You Donate It. Consider Bill Gates, Warren Buffett, Gordon Moore, And Some Others You've Never Heard Of. You Can Certainly Donate To Good Causes No Matter Your Income Level, And People Donate At All Levels Of Wealth.",
        blogText5: "So, Depending On Your Beliefs And Your View Of Your Role In Society, Donating Your Money To Worthy Causes Can Rank As A “Better Use” Than Buying Real Estate. Still, People Need A Place To Live. Providing That Qualifies As A Pretty Good Use.",
        views: "4.3K ViewsView . Upvotes"
    },
]
export default blogData









