export default {
  "author": "coreyp_1",
  "commentCount": 29,
  "id": 16572857,
  "kids": [ 16616157, 16615840, 16615881, 16615917, 16615829, 16616329, 16615854, 16616315 ],
  "score": 15,
  "text": "We have long known that Walmart is tracking your purchases, and that they are trying to compete with Amazon.<p>Now, they will share your personal, in-store purchases with whomever is able to see your browser window.<p>I found this out when I walked out of the room &amp; a friend got bored and decided to use my laptop to find who was selling a specific amiibo, and when I came into the room, he asked, &quot;hey, why did you buy XYZ?&quot;.  XYZ was just a food item, but this was <i>CREEPY</i>, that walmart was showing last week&#x27;s in-store purchase <i>ONLINE</i>, without my permission!<p>I had not visited the walmart.com website in a LONG time, so I most certainly didn&#x27;t expect to still be logged in.  But, more importantly, I didn&#x27;t expect my private purchase history to be laid out publicly, either, on the main walmart.com front page.  The most important thing is, though, <i>WHY CAN&#x27;T I TURN THIS OFF?!?</i><p>I turned off &quot;Personalized Experience&quot; under &quot;Your Account &gt; Communications and Privacy&quot;, but the &quot;Ready to reorder?&quot; block is still on the front page.<p><i>Any ideas of what I should do next?</i>",
  "time": 1520900220,
  "title": "Walmart.com shows your in-store purchases whether you like it or not",
  "type": "story",
  "comments" : [
    {
      "author" : "beager",
      "id" : 16616157,
      "kids" : [ 16616930 ],
      "parent" : 16615781,
      "text" : "I would like to see each particular item tagged not as &quot;Seed&quot;, &quot;Series A&quot;, &quot;Post Series A&quot; but with more tangible events or metrics that would trigger needing to take those things seriously.<p>For instance:<p>---<p>&quot;Follow an onboarding &#x2F; offboarding checklist&quot;<p>Do this when...<p>- you have ten or more employees,<p>- you have at least ten thousand user accounts, OR<p>- you have at least ten thousand dollars MRR<p>---<p>&quot;Protect your application from DDoS attacks&quot;<p>Do this when...<p>- you have publicly announced funding, put a major product launch or milestone in commercial press, or have publicized a key strategic hire<p>- a prolonged period of downtime (N minutes&#x2F;breaking 3 or 4 nine availability) would have a materially adverse effect on your business<p>---<p>&quot;Use SSL certificates to secure people using your website&quot;<p>Do this when...<p>- you are collecting any information from visitors to your website (logins, email addresses, phone numbers)<p>- you would not want the traffic from sessions browsing your website to be intercepted by third parties.<p>Of course, a lot of these things would be obvious, but there&#x27;s a chance here to make this really accessible to the security ignorant or security illiterate.",
      "time" : 1521432925,
      "type" : "comment"
    },
    {
      "author" : "jbaviat",
      "id" : 16615840,
      "kids" : [ 16616954, 16616079, 16617093 ],
      "parent" : 16615781,
      "text" : "I’m the CTO at Sqreen and I do love Matasano (cryptopals... awesome crypto challenge <a href=\"https:&#x2F;&#x2F;cryptopals.com&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;cryptopals.com&#x2F;</a>).\nRealistically, security audits or bug bounty are not doable in seed startups - where most of the time no one has any security knowledge, and no money :)\nThanks for the missing things we will update! By the way this is open source, feel free to contribute: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;sqreen&#x2F;CTOSecurityChecklist\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;sqreen&#x2F;CTOSecurityChecklist</a> (not sure this is 100% today with the version on Sqreen.io, we’ll get there this week).",
      "time" : 1521426765,
      "type" : "comment"
    },
    {
      "author" : "paulb81",
      "id" : 16615881,
      "kids" : [ 16616111, 16615932 ],
      "parent" : 16615781,
      "text" : "I worked on this checklist and your feedback is very appreciated.<p>You&#x27;re right on all your points from a pure security point of view. We should be doing security as soon as possible. Unfortunately, the reality of building a startup is about finding product-market-fit. Entrepreneurs are not incentivized to do security early on. The fear strategy our industry is using for the last XX years has failed.<p>As security professionals, we need to help entrepreneurs and educate developers find a good balance between building a business and building good security practices. This is the goal of this checklist.<p>We can&#x27;t expect developers to spend days implementing security best practices before even having a business.",
      "time" : 1521427296,
      "type" : "comment"
    },
    {
      "author" : "irundebian",
      "id" : 16615917,
      "kids" : [ 16616173 ],
      "parent" : 16615781,
      "text" : "The list is mixing different subject matters.<p>The security of all the information in your company should be handled by an information security management system, which is normally under the supervision of a CSO or CISO. The ISM gets established by defining (e. g. through policies) roles, processes and requirements for many problems occurring related to information security.<p>The security of your infrastructure should also be supervised by some management position and your infrastructure should be designed in advance to fulfill your security requirements.<p>The security of your software should also be supervised by some management position and your the whole software process  have to be designed to produce secure software.<p>I don&#x27;t believe this can be handled by a CTO with a basic checklist, although it includes important points which should be supervised. This list also feels kinda incomplete.",
      "time" : 1521427733,
      "type" : "comment"
    },
    {
      "author" : "mkagenius",
      "id" : 16615829,
      "parent" : 16615781,
      "text" : "&gt; IP restrictions aren&#x27;t the way to do that<p>I think they might talking about something else — like restricting db access to only certain IP where apps are hosted. That’s the problem with checklists — they aren’t very clear at times.",
      "time" : 1521426603,
      "type" : "comment"
    },
    {
      "author" : "unclebucknasty",
      "id" : 16615854,
      "kids" : [ 16615927 ],
      "parent" : 16615781,
      "text" : "I&#x27;d add to this that there is also a <i>culture</i> of security that is being created from day one. It is unrealistic to purposely let things slide security-wise with the idea that you&#x27;ll care about it later, and expect a healthy culture to emerge.<p>Going back to layer on  security can be challenging, but it&#x27;s even harder to retroactively layer on a way of thinking about and prioritizing security. For instance, it literally has to be that every engineer is thinking about the security implications of every design&#x2F;implementation choice with the same urgency as the product features themselves. And there has to be a sense of standards, accountability and direction coming from the top.<p>Equifax is a good example of a company that failed in this. You look at the original incident, then consider how they made it so much worse in their response. At a certain point you start to think &quot;is anyone even thinking about security there?&quot; and you realize their culture is fundamentally broken in such a way that their entire organizational mindset will need to be clean-sheeted. That&#x27;s a tough road.",
      "time" : 1521426945,
      "type" : "comment"
    },
    {
      "deleted" : true,
      "id" : 16616315,
      "parent" : 16615781,
      "time" : 1521436858,
      "type" : "comment"
    }
  ]
}

// This what a payload for a single item should look like
// For performance reasons, each item only contains data for its immediate descendants.
