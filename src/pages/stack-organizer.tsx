import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { Typography } from '@/components/Typography';
import Head from 'next/head';
import Image from 'next/image';

export default function StackOrganizer() {
  return (
    <>
      <Head>
        <title>Stack Organizer</title>
        <meta name="description" content="Stack Organizer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#005687] text-white to-[#00112C] min-h-screen flex flex-col justify-center w-full p-2 sm:p-12 md:p-18 lg:p-24 xl:px-36 gap-96 items-center">
        <section className="flex justify-center items-center flex-col gap-10">
          <Typography variant="h1">Stack Organizer</Typography>
          <Image
            className="stack-organizer-details__img"
            src="/stack-organizer-login.png"
            alt="stack organizer screenshot"
            width={700}
            height={700}
          />
          <div className="flex gap-10">
            <Button
              link="https://github.com/sanberkHax/stack-organizer"
              variant="sm"
            >
              Repository
            </Button>
            <Button link="https://stack-organizer.sanberk.dev" variant="sm">
              Live Site
            </Button>
          </div>
        </section>

        <div className="flex flex-col gap-10">
          <Typography variant="h2">Purpose of The Project</Typography>
          <Card className="card">
            <Typography variant="body">
              I built Stack Organizer because I realized I kept getting lost in
              multiple Stack Overflow tabs for different problems every time I
              was working on a project.
            </Typography>
            <Typography variant="body">
              You search for one problem and find a solution, but that solution
              leads to another problem, then that leads to another, then
              another...
            </Typography>
            <Typography variant="body">
              So I decided to solve this problem by building an organizing app
              that allows you to save your desired solutions inside a dedicated
              project or inside categorized nested folders to keep things even
              more organized.
            </Typography>
          </Card>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <Typography variant="h2">Tech Stack</Typography>
          <div className="flex flex-wrap gap-10">
            <Icon name="react" />
            <Icon name="redux" />
            <Icon name="sass" />
            <Icon name="jest" />
            <Icon name="firebase" />
          </div>
        </div>
        <section className="flex flex-col gap-10 text-center">
          <Typography variant="h2">Features</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center items-center">
            <div className="flex flex-col gap-10">
              <Typography variant="h3">Authentication</Typography>
              <video controls src="/auth.mp4"></video>
            </div>
            <div className="flex flex-col gap-10">
              <Typography variant="h3">Custom File System</Typography>
              <video controls src="/file-system.mp4"></video>
            </div>
            <div className="flex flex-col gap-10">
              <Typography variant="h3">CRUD Operations</Typography>
              <video controls src="/crud.mp4"></video>
            </div>
            <div className="flex flex-col gap-10">
              <Typography variant="h3">
                Search with Stack Overflow API
              </Typography>
              <video controls src="/search.mp4"></video>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 ">
          <Typography variant="h2" className="text-center">
            My Process
          </Typography>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-24 items-center justify-center">
              <div className="flex flex-col gap-10">
                <Typography variant="h3">Planning</Typography>
                <Card>
                  <Typography variant="body">
                    My first step was researching how real world projects are
                    built from start to finish. As this was my first big
                    project, I needed to learn a lot about how to plan a
                    project.
                  </Typography>
                  <Typography variant="body">
                    Without even touching any code, I started brainstorming what
                    features I need for the Minimum Viable Product and
                    researched how it can be built.
                  </Typography>
                  <Typography variant="body">
                    After figuring out the MVP, I wanted to use an Agile
                    methodology to manage the project, so decided to go with
                    Kanban because it would be better for a single person
                    project. I used Trello to create the Kanban board. Then
                    broke down the MVP to small managable tasks backed up by
                    user stories.
                  </Typography>
                </Card>
              </div>
              <Image
                src="/kanban.png"
                width={600}
                height={600}
                alt="kanban board"
                className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-24 items-center justify-center">
              <Image
                src="/figma.png"
                width={600}
                height={600}
                alt="figma"
                className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
              />
              <div className="flex flex-col gap-10">
                <Typography variant="h3">Designing</Typography>
                <Card>
                  <Typography variant="body">
                    I started designing process with a quick draft with mobile
                    first approach, kept everything as minimal as possible to
                    fit the MVP. After deciding the initial mobile layout, I
                    moved on to desktop layout.
                  </Typography>
                  <Typography variant="body">
                    Then I tried few variations of colors for the website and
                    settled with the current blue and white combo.
                  </Typography>
                </Card>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-24 items-center justify-center">
              <div className="flex flex-col gap-10">
                <Typography variant="h3">Building</Typography>
                <Card>
                  <Typography variant="body">
                    Started building the app according to task order on Kanban
                    board. As I already knew what each component would look like
                    thanks to design phase, they were easy to build with React
                    and Sass.
                  </Typography>
                  <Typography variant="body">
                    {`However, there were a lot of things that needed to work together
                besides presentational components. So when I started
                implementing stuff like Redux, Firebase and Automated Testing on
                top of them, I've encountered a bunch of mind numbing bugs. But
                thanks to my Googling and problem solving skills I was able to
                crush them in the end.`}
                  </Typography>
                  <Typography variant="body">
                    {`Building process was also a learning process for me. There were
                a lot of stuff I didn't know how to do and a lot of bugs I
                haven't encountered before. So most of my time was also spent on
                learning new things, trying different approaches, making lots of
                mistakes along the way but eventually learning from them.`}
                  </Typography>
                </Card>
              </div>
              <Image
                src="/google.png"
                width={600}
                height={600}
                alt="building"
                className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <Typography variant="h2" className="text-center">
            Problems I have Faced
          </Typography>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <Typography variant="h3">File System</Typography>
              <Card>
                <Typography variant="body">
                  Even though I made a proper plan before writing any code, I
                  highly underestimated how complicated the file system was.
                </Typography>
                <Typography variant="body">
                  {` As I dived into implementation in the "Save As" modal first and
                succesfully implemented project selection, I got completely
                stuck with the folder selection. Since it needed to have nested
                folders, it couldn't just be a dropdown selection. And because I
                had a very specific design for it, I couldn't find any third
                party library that fits my needs.`}
                </Typography>
                <Typography variant="body">
                  After researching how to properly store nested data in redux
                  and database, learning more about normalized data and bunch of
                  trial and errors. I finally managed to make it work.
                </Typography>
                <Typography variant="body">
                  Deleting a folder was also a challenge because it was also
                  supposed to delete any nested folder inside it. After some
                  brainstorming I wrote a recursive function that looks for
                  every single sub folder inside the folder and deletes them.
                </Typography>
                <Typography variant="body">
                  While it was a tough challenge, I really enjoyed getting my
                  hands dirty with something like this, it was a great learning
                  experience.
                </Typography>
              </Card>
            </div>
            <div className="flex flex-col gap-10">
              <Typography variant="h3">Firebase</Typography>
              <Card>
                <Typography variant="body">
                  Even though {`I've`} used Firebase in my other projects
                  before, none of those projects scale was as big as this one.
                  So I spent few days how to properly integrate Firebase with
                  Automated Testing and Redux.
                </Typography>
                <Typography variant="body">
                  After dealing with bunch of small bugs, I eventually set up
                  Firebase Emulators for Automated Testing to mock Firebase
                  services in tests.
                </Typography>
              </Card>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <Typography variant="h2" className="text-center">
              What I have Learned
            </Typography>
            <Card>
              <Typography variant="body">
                This whole project was a challenge on another level but also a
                great opportunity to improve my knowledge, because stepping out
                of my comfort zone and diving right into something new is the
                best way for me to learn something.
              </Typography>
              <Typography variant="body">
                {`I've`} learned how to manage complex states with Redux and how
                to store data efficiently in database to work with.
              </Typography>
              <Typography variant="body">
                Greatly improved my knowledge on Automated Testing.
              </Typography>
              <Typography variant="body">
                Got the grasp of managing a bigger scale project from start to
                finish.
              </Typography>
              <Typography variant="body">
                And found out Stack Organizer is actually useful, because I kept
                getting lost inside multiple Stack Overflow tabs and wished I
                had built it sooner.
              </Typography>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
