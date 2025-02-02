import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Mohamaed Azizi-Alaoui",
    username: "@moha",
    body: "Ce Logiciel nous a fais gagner 35h de travail par mois",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQF0HxfsNJKq8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674992707495?e=1744243200&v=beta&t=70pY1iSzk8ccdF0ZPlLz5YrSXo5J6ws9CAJrm56vYks",
  },
  {
    name: "Medhi Ouarradi",
    username: "@guizmo",
    body: "Il y a un avant et un après l'utilisation de ce logiciel",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQG1FK9z7S195Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1518430414799?e=1744243200&v=beta&t=OjZrpYWJQyu24TjLRyDE3-8iXuRx85rhQwp7zvVQmtM",
  },
  {
    name: "Pierre Gibrenne",
    username: "@gigip",
    body: "Qui a fais cette MasterClass ? C'est incroyable",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHP6W4hKETwEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1625069298132?e=1744243200&v=beta&t=c6lbfdT2K-ZYpglgDriS7sG5xao9omnZtPg1vBmJuHI",
  },
  {
    name: "Emmanuel Macron",
    username: "@manu",
    body: "Ah oui, bien les jeunes, vous avez fais du bon boulot",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQHdzozXOGcFgw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712059080262?e=1744243200&v=beta&t=f8RSiTSrRsR0-dyDINWbkhTiIO5h8fK8AL9lwsUD-Qc",
  },
  {
    name: "Abdelhakim Hattouti",
    username: "@Barragun",
    body: "Le développement logiciel viens de connaitre une révolution",
    img: "https://media.licdn.com/dms/image/v2/D4D35AQFHiJ3vRUErGw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1733387623804?e=1739116800&v=beta&t=TXfQvVx_MD7bd6BuqqSxIKC50Y3lNReeRYPEKTL3gJw",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
       <div className="text-center">
        <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase text-green-400">
          Témoignages
        </h2>
        <h2 >
        Ce sont nos utilisateurs qui en parlent le mieux de l'efficacité de notre logiciel
        </h2>
        <br />
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
