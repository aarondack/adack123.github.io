import { h, Component } from 'preact';
import {
  BlogPostContainerDesktop,
  BlogPostContainerMobile,
  BlogHeader,
  Content,
  SectionTitle,
  Brackets,
  PreCode,
} from './formatting';
import { Desktop, Mobile } from '../responsive';

class Davinci extends Component {
  renderContent = () => (
    <div>
      <BlogHeader>The Lost Leonardo</BlogHeader>
      <SectionTitle>
        <Brackets>#</Brackets>
        Everyone loves a good mystery.
      </SectionTitle>
      <Content>
        If I were to tell you that today it is possible to discover arguably the greatest painting
        ever by Leonardo Da Vinci would you believe me? Surely, you would ask, with today’s
        technologies if a painting is hidden in plain sight it has to be found, or maybe it doesn’t
        exist at all? The painting in question is “The Battle of Anghiari”, which was commissioned
        in 1505 to adorn the Palazzo Vecchio’s Hall of the Five Hundred in Florence. At the height
        of his artistic powers, once started, this painting was considered to be the greatest work
        that Da Vinci would complete not only for its grandiose appearance but also for its level of
        intricacy. Lost since the 1500's, recently there have been new developments into the
        potential rediscovery of this treasure.
      </Content>
      <Content>
        The theory as postulated by the art historian Maurizio Seracini is that the painting is
        hidden behind Giorgio Vasari’s fresco, “The Battle of Marciano in Val Di Chiani” in the Hall
        of the Five Hundreds. In the fresco there is a portion with a Florentine militant waving a
        green flag with the words “Cerca trova”, in English, “He who seeks, finds”. Is it possible
        that this truly is a clue left by Vasari to the true whereabouts of the now dubbed “Lost
        Leonardo” painting?
      </Content>
      <Content>
        Telling the story of a potential discovery of the painting by Seracini followed by more
        endeavors with the Italian government to free resources and access the often packed Palazzo
        Vecchio would be interesting, but at the end of the day the painting would mean nothing to
        you. It is a common event for people to blow through museums disregarding great paintings
        and ancient artifacts, and the reason is simple. Why care about something you know nothing
        about? The story of the Battle of Anghiari is not just simply Da Vinci at the peak of his
        career with a freak accident, but also a tale of genius, greed, and even jealousy by the
        great Michelangelo himself.
      </Content>
      <SectionTitle>
        <Brackets>#</Brackets>
        The year is 1505.
      </SectionTitle>
      <Content>
        Leonardo Da Vinci has recently been commissioned by Piero Soderini to paint the greatest
        fresco that Florence has ever known, and it is to be placed within the Palazzo Vecchio. A
        year before Michelangelo recently completed arguably the greatest sculpture of all time,
        “The David”, in which he toiled over his marble for four years. But what few know is that
        Michelangelo actually wasn’t first choice to carve the famed duomo block. Just before the
        carving started in 1501 Da Vinci was actually asked first to carve the block, and his
        response to this request inevitably left a sour taste in Michelangelo’s mouth. Da Vinci
        says, “Sculpture, a very noble art, is one that does not in the execution require the same
        supreme ingenuity as the art of painting, since in two most important and difficult
        particulars, in foreshortening and in light and shade... the painter has to invent a
        process, [whereas] sculpture is helped by nature.” It is true that Michelangelo’s first and
        only love was sculpture, that he was tormented by the painting of the Sistine Chapel almost
        to death, and even after finishing the Sistine all he wanted was to carve marble. Naturally,
        Da Vinci’s lack of appreciation for sculpture irked Michelangelo. On top of this, Soderini
        actually offered Da Vinci more money for the painting of the Hall compared to carving a
        fourteen foot block of marble. This was actually commonplace in Italy, painting was often
        considered of more value than a sculpture. Not surprisingly, when Da Vinci was commissioned
        one side of the Hall of the Five Hundred Michelangelo begged to paint the other side. What
        would be better than proving your worth to the world than beating the master at his own
        trade? It is known that Michelangelo had an obsessive personality, he was an inexorable
        force for perfection; the Sistine chapel was restarted and he fired his entire staff so he
        could paint it himself. So, when the opportunity presented itself to paint the other side he
        decided on a similarly themed painting named “The Battle of Cascina”. Today we have neither
        paintings, so what exactly happened?
      </Content>
      <Content>
        It was sort of like a bad love story. Michelangelo was very private with his work, opting to
        show few and only allowing trusted friends to come sketch off the cartoon. Da Vinci, who
        idling with one project was never his forte was naturally experimenting with engineering,
        medicine, and the kitchen sink. While Michelangelo might be argued to be the greatest
        painter and sculptor to live, Da Vinci is likewise argued to have possessed the most
        widespread talents of any one individual. Alongside innovating other areas of education, Da
        Vinci was actually attempting a new way of plastering the painting which in doing so left it
        completely ruined. It’s actually slightly more complicated than that but no one wants to be
        bored with artistic jargon. One thing to note, Michelangelo might not have liked Da Vinci
        but he definitely admired him. Really, they both admired each other. Once Michelangelo got
        wind of the tragedy of the fresco he abandoned painting his. The world went from two of the
        greatest painters to ever have lived painting beautiful frescos on the historic walls in the
        Palazzo Vecchio to a ruined painting and a mere cartoon by Michelangelo. In the end it does
        have feelings of a bad love story or maybe it really wasn’t meant to be. Michelangelo
        stopped because there was no competition and Da Vinci ruined his greatest work and it is
        lost forever. Or is it?
      </Content>
      <Content>
        Currently, Seracini is on hold. He was allowed to drill into Vasari’s frescos and even
        though he found “a rough coarse surface, with material” it has since been abandoned. As it
        seems with all great discoveries the project has been shut down due to pressures of the
        invasive techniques in finding the painting. Unfortunately for Seracini there has been no
        definitive evidence of the painting existing behind Vasari's fresco. But, there is no
        evidence suggesting that the painting doesn't exist. It's essentially all grey. In art,
        there are two parties. The first party strongly feels that Da Vinci's work is behind the
        fresco, and the other party is solely concerned with preserving Vasari's masterpiece, even
        if it is at the expense of a Da Vinci discovery. Regardless, if found the work would be
        completely ruined, but the intrigue in actually finding it is what drives this quest. Would
        Vasari really hide a painting? He has before, but would he with Da Vinci’s spoiled
        masterpiece?
      </Content>
      <SectionTitle>
        <Brackets>#</Brackets>
        You be the judge.
      </SectionTitle>
      <Content>
        Spoiler alert: If you actually have the desire to go to the Palazzo Vecchio and look at
        Vasari’s fresco you will not be able to make out the “Cerca Trova” in the flag with just
        your eyes. It is high up on the fresco which stands 39 feet above the ground. I recently
        went to Italy intrigued by this story and could truly not make out the “Cerca Trova”.
      </Content>
    </div>
  );

  render() {
    return (
      <div>
        <Desktop>
          <BlogPostContainerDesktop>{this.renderContent()}</BlogPostContainerDesktop>
        </Desktop>
        <Mobile>
          <BlogPostContainerMobile>{this.renderContent()}</BlogPostContainerMobile>
        </Mobile>
      </div>
    );
  }
}

export default Davinci;
