import Image from "next/image";
import MetaData from "../components/metadata/MetaData";
import styles from "../styles/InfoPage.module.scss";

const InfoPage = () => {
  return (
    <>
      <MetaData
        title="Exchanger | Info"
        description="Learn more about the Exchanger experience."
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Lorem Ipsum Dolor</h1>
        <section className={styles.content}>
          <div className={styles.textBlock}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vestibulum congue elit, a hendrerit orci efficitur ac. In id nulla
              vitae ex vulputate dictum ac pulvinar libero. Suspendisse molestie
              aliquet ultrices. Sed tempus eros non nibh auctor imperdiet. Sed
              at aliquam nunc. Vestibulum vestibulum tincidunt magna, vitae
              egestas ligula sagittis eu. Nam at volutpat urna.
            </p>
            <p>
              Quisque scelerisque felis sit amet lacinia porta. Maecenas a risus
              est. Aliquam id mauris imperdiet, dignissim diam et, tincidunt
              elit. Donec magna tortor, feugiat vitae facilisis et, vulputate
              quis dui. Nunc scelerisque eros vitae nulla lacinia, at aliquet
              enim fringilla. Vestibulum ultrices, elit tempor pulvinar ornare,
              arcu metus tincidunt mauris, eget mattis enim ligula id turpis.
              Suspendisse ut augue consectetur, sollicitudin dui vel, pharetra
              risus. Mauris tortor diam, malesuada ultrices magna ut, lobortis
              luctus ante. Sed scelerisque ipsum nec velit sollicitudin mattis.
              Sed facilisis consequat sollicitudin. Aenean quis sem ut velit
              viverra mattis. Fusce sodales imperdiet dignissim.
            </p>
            <p>
              Sed vitae enim porta, elementum felis vitae, mollis arcu. Cras in
              faucibus lacus. Duis volutpat finibus sem non pharetra. Integer
              non ligula sit amet justo ultricies laoreet ac at felis. Nunc vel
              velit turpis. Duis non nunc sed dolor convallis imperdiet. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Vestibulum nisi ligula, molestie nec dolor in,
              bibendum vulputate tellus. Fusce vitae erat ultricies, consequat
              libero vel, vestibulum massa. Aliquam ornare vestibulum lobortis.
              Aliquam erat volutpat. Vestibulum mollis aliquet lacus, non
              bibendum mauris lobortis vehicula. Proin ut augue ac mauris
              eleifend tempus at in libero. Aenean lacinia diam nisl, ac faucibus
              odio luctus sit amet.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src="https://placebear.com/640/360"
              alt="Bear in the water"
              width={640}
              height={360}
            />
            <p>
              Ut nec lectus at metus posuere maximus nec eget sapien. Nulla ut
              lorem quis ante rhoncus volutpat non ut est. Integer vitae
              pellentesque libero, eu gravida eros. Etiam laoreet tincidunt ante
              nec faucibus. Suspendisse potenti. Sed hendrerit justo ac lectus
              malesuada faucibus. Cras sit amet egestas est. Aliquam accumsan
              congue vestibulum. Aliquam et mollis diam. Morbi volutpat at est a
              placerat. Morbi cursus, enim ac pharetra porta, sem nulla
              imperdiet mauris, eget luctus elit erat ac mi. Mauris aliquet
              lorem eget nisl gravida porttitor.
            </p>
            <p>
              Curabitur ullamcorper purus risus. Morbi eu lacus vel odio
              pharetra ultrices pellentesque nec dui. Maecenas sed nulla vitae
              felis ultrices sollicitudin sed vestibulum orci. Donec nec volutpat
              eros. Suspendisse potenti. In quis velit ac augue accumsan ornare
              a in turpis. Curabitur pellentesque elit imperdiet, porta ligula
              nec, fermentum ante. Nunc nisi quam, tincidunt sed tellus vel,
              cursus congue magna. Mauris ultrices hendrerit bibendum. Nam a
              mollis sem. Donec malesuada volutpat volutpat. Ut euismod felis
              eleifend lacus fermentum. Donec eu aliquet lorem, quis mattis
              nisi. Vivamus sit amet nisi at sapien pretium porttitor id
              hendrerit leo. Nullam quis euismod magna.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default InfoPage;
