README

# libtickIT

## What is this?

This is just a small, but useful, system for issuing and tracking support tickets for my day job.

I work in a public library of a small city. Our IT department is two people, myself included. We do well enough and get the job done. But I'm trying to put my programming interests to good use where ever I can. Fielding IT issues through email is such a pain. It's fine. It works. But it's messy and confusing and raises all the red flags in terms of cognitive load. I love releaving cognitive loads. Just dropping a huge load, aaah, the best.

Enter, libtickIT, the best tool ever made for support ticket tracking, ever. Maybe even the best tool ever made, period.

But even though libtickIT is maginificent beyond words, there are still many things I can only *hope* it helps us do. For example, the core of this system will be creating and managing IT support tickets. Great. Love it. Sign me up. But what I really want is to learn from these tickets. I want to identify patterns, recall solutions, and just in general have a system in place for quickly accessing solutions and generating insights. I want to understand *why* things fall apart.

## Okay cool, but like, why?

Great question! I'm so glad you asked.

There are a few reasons actually:
1. Because this is personally gratifying work. I love programming and simply want to do this.
2. Because the current way we (our IT "department") handles IT issues is cumbersome. So I want to simplfy and streamline the whole dam process.
3. Because the library has no money for tools like this and even if we did, I don't want us to depend more on Google and Microsoft products.
4. Because I want this to become a community effort. I sort of imagine that we could invite students or whomever from the community to contribute to a real tool that real people are using to make their real library function.

## Yeah, but how?

Exactly! How are we going to pull this off?

As of August 10, 2025 it seems to me like our tech stack is going to look something like this:
- Backend:
	- Node.js and Express.js to get that sweet sweet JavaScript all over the place.
	- Database stuff is taken care of with MongoDB and Mongoose (as our Object Document Mapper). These tools should provide a flexible schema (which is good because I don't really know what I'm doing), good scaling (always nice), and works real good with JavaScript.
- Frontend:
	- React. I'm sort of reluctant to use it, but I'm not actually sure why. Maybe just because it's a Meta/Facebook project? Who knows. But it's a robust system with a large ecosystem that's well documented. Good enough for me. We can always change things in the future.
- Containerization:
	- Docker. I'm not sure where this thing is going to be deployed or onto which sort of machine. So I'm just going to use Docker up front to create a consistent project.
- Dev tools:
	- git for version control
	- npm for package management.
	- Docker compose for multi-container management (I will have two containers, one for the frontend and one for the backend).

I'm liking the promise of this stack for a few reasons (I love reasons (and aparently parentheticals...)):
- We can get away with just JavaScript. Which wounds my nred heart a little bit because there are so many beautiful programming languages out there and I want to learn them all. But practically, let's just make it all JS all the time.
	- Side note, I'm not fussing with TypeScript at the moment because I don't want to add too much to this learning curve.
- These tools are well documented with large communities of users. Which is great for a n00b like me. 

---

## A Roadmap (sort of)

I want to get a functioning system running in our library by the end of this year. So in about 5 months from now (2025-08-10). No idea how realistic that is. There is so much I need to learn.

In that time I'll need to:
- [ ] Sketch out the initial design
- [ ] Determine some requirments
- [ ] FIgure out if this is some we could actually use (are there scary legal issues I know nothing about?)
- [ ] Develop the backend
- [ ] Develop the frontend
- [ ] Make it work
- [ ] Make it right
- [ ] Make it fun

Then we'll put it into a few people's hands and take their feedback. From which I will spiral into a pit of dispare where I will question the very legitamacy of my existence, only to find out how silly it is to get depressed over user feedback.

Then we'll implement the best of that feedback and do it all over again.

If at the end of these five months  can create a system is easy to use, reliable and helpful, and maybe even a little fun, then I'll be a very happy clam.