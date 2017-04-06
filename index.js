// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// for express to find static files in the "public" directory
app.use(express.static('public'));

// ** Routes ** //

app.get("/",function(req,res){
	var mydata = {
		 pageTitle: "Holes in my lace panty",
		 pageContent: "Far away, your lonely self hang in a crowded stall. Far away, your being was on display for all humanity. Through all your aloofness, magnificence oozed from your guarded pores And your beauty drew the masses for that’s what they could see. The minute I saw you, I felt a longing in my chest. Cliché yes, but you reeked of comfort and adventure And my essentials were in need of a redress. Lord knows my soul needed a combustion; no fear of being charred. The people; they starred with beseeching eyes and smoldering intensity. Some lavished with praise till the sugar eased off their tongues. They failed to see, though your exterior was intricate, you were just an icon of simplicityAnd still others undermined your value in mimic theory songs. But me. I saw the beauty in your intricate woven design, and intelligence? in the maze of your make; the kind that dumbs you into responding every question with an ‘uh huh, yeah fine I saw the detailed lines that graced. By Asantewa"
	 };
	res.render("page.handlebars",mydata);
});


app.get("/poem1",function(req,res){
	var mydata = {
		 pageTitle: "Thank me!",
		 pageContent: "The morning sun pried my eyes open with great difficulty. And they widened to a world of perfection, one likened to a face free of acne. Such majestic artistry eyes have not seen; Flying palm-sized creatures, dwelling in a garden in all shades of green.Clear blue gushing waters; the hue you see in just books now. The kind of image that induces a peaceful feeling and caused me to coin the expression wow! Suddenly an alien sound distracts my visual appreciation There lay a creature, squinting so hard at me that his eyes had become narrower, you’d think he was Asian. He limped towards me holding on to his ribs Staring intensely from my head to toe, staying longer at my hips, Tracing his big strong hands all over my body – a man on a quest, Glowing with excitement whiles dilly-dallying with the soft projections on my chest.....By Asantewa"

	};
	res.render("page.handlebars",mydata);
});


app.get("/poem2",function(req,res){
	var mydata = {
		 pageTitle: "Xray",
		 pageContent: "Look past my physique, search for branding of soul and find a label that says unique. In every positive way, opposite attracts but my spirits always makes negative sway, If you want to know what’s in then switch vision to xray. Looks can change and the perish, today I’m sporting a perfect figure, tomorrow, I’m malnourished so look beneath what you see. See how lukewarm this heart be, not too cold to make you shiver because you are like my child and never too hot because embracing your emotions will leave a scald. Looks can really be deceiving so don’t judge me by what you see this evening, let patient envelop your conclusion until morning come, then you will find no chaff in this man you have been sieving. by MUTOMBO DA POET"

	};
	res.render("page.handlebars",mydata);
});



app.get("/poem3",function(req,res){
	var mydata = {
		 pageTitle: "Probably nuts",
		 pageContent: "When you chew a lollilop stick for 2 hours straight, - that's when you really know how it feels to be lost. What is pain? It aint even close to growling in the middle of the night and desperately groping your tummy like you could pull the hurt out..It's seeing a loved one figuratively die of pain before your eyes and knowing damn well you could do nothing to lessen the pain...And wishing you could switch lives, jus so you could bear the pain on their behalf..Disturbia, is when you deliberately probe into an already-killing-wound; jus to feel numb with pain..And I know I don't need to speak French for you to realise how effd up that is Ever felt stupid? When your words make meaning to everybody but the people you love, - yeah you have Now someone please tell my muse to come back. I promise to be a good lesbian and not have wistful thoughts of a male guiding spirit. Please come back muse, so I could atleast try and rhyme By Asantewa"

	 };
	res.render("page.handlebars",mydata);
});



app.get("/poem4",function(req,res){
	var mydata = {
		 pageTitle: "SWEET MEMORIES",
		 pageContent: "Man never knows what tomorrow brings because its opaque, but the brain can always cut through the transparent past and tap those nostalgic memories to wake. Imagery of childhood renovates brain so it looks like a gallery, portraits, and abstract but one mosaic depicts the crucifixion on calvary. This is when he really died because everything was bliss, an eye for an eye was then an eye for a kiss. This is in remembrance of childhood like its dead and gone but this past still lives on, like greats whose works and name have been caligraphed on life’s papyrus. We children who were vagrants like my pappy was, the only difference was that we had better dreams because we came home to sleep the night away. by MUTOMBO DA POET"
	 };
	res.render("page.handlebars",mydata);
});




// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
	// Print out a message to the console
  	console.log('Listening on port 3000!');
});
