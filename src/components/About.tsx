import { Card } from './Card';
import { Typography } from './Typography';

export const About = () => {
  return (
    <section className="flex justify-center gap-10 items-center flex-col h-screen  w-full text-white">
      <Typography variant="h2" bold>
        About Me
      </Typography>

      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum
        maiores rerum earum fugiat maxime id illo quis reprehenderit quidem ab
        doloribus similique, officiis cumque quia neque natus a dignissimos
        consequuntur, officia adipisci aut. Debitis odio tempora quidem, eveniet
        nemo quo! Impedit repudiandae reiciendis beatae vitae necessitatibus
        quam autem optio alias? Nostrum provident ab quod, labore
        exercitationem, ex quas consectetur reprehenderit id iusto temporibus,
        laboriosam vel. Beatae delectus cumque laborum dignissimos praesentium
        ab minus culpa, ratione voluptatibus! Fuga illo perferendis repellendus
        delectus voluptatibus, consequuntur quia similique dicta! Quis culpa a
        facilis voluptatibus quam! Eum esse, ad placeat cum quibusdam vero.
      </Card>
    </section>
  );
};
