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

class Greek extends Component {
  renderContent = () => (
    <div>
      <BlogHeader>Random Adventures in Greek</BlogHeader>
      <blockquote>Ἓν οἶδα ὅτι οὐδὲν οἶδα</blockquote>
      <blockquote>All I know is that I know nothing</blockquote>
      <Content>
        This crazy looking phrase belongs to one of the greatest free thinkers and philosophers of
        all time, Socrates. Sold on learning Greek? Probably not so much, but in fact, learning
        Greek can actually help you understand the English language and who doesn't want to learn
        more about that. Not to mention you can impress that unannounced greek scholar model at your
        next cocktail party, who knew the Greek language could be so useful.
      </Content>

      <Content>
        Definitely the biggest learning curve with the Greek language is the alphabet, and honestly
        there's really no shortcuts besides learning it. Without further ado, let's begin.
      </Content>
      <Content>
        Here are some words that are innately greek in the English language. A good practice to
        learning Greek is to write out the alphabet and then write out a couple of words. The word
        Genesis for instance is Greek in origin and its written form is Γενεσις. There are two
        versions of "s" or sigma in greek, the ς is the "s" that is used to end sentences whereas σ
        is used within the word. Try these words below by just matching the letters with the greek
        letters. Boom! Some Greek has been learned!
      </Content>
      <Content>Drama, basis, comma, acropolis</Content>
      <Content>
        Here are some interesting words to read aloud and can connect to the English language:
      </Content>
      <Content>
        γραφω - to write: read "Grapho" similar to graffiti or writing and scribbling
      </Content>
      <Content>θεραπευω - to heal, cure: read "Therapeuo" as in Therapeutics</Content>
      <Content>αγορα - market: read "Agora" as in your traditional marketplace</Content>
      <Content>επιστολη - letter: read "Epistola" as in an epistle</Content>
      <Content>ναυτης - sailor: read "Nautaes" as in nautical</Content>
      <Content>Περσης - Persian: read "Persaes" as in Persian</Content>
      <Content>ποιητης - Poet: read "Poiatas" as in Poet</Content>
      <Content>λογος - word: read "Logos" as in ethos, pathos, logos</Content>
      <Content>δενδρον - branch: read "Dendron" as in dendrites in the human brain</Content>
      <Content>δεσποτης - master: read "Despotas" as in a despot </Content>
      <Content>ἁνθρωπος - man: read "Anthropos" as in anthropomorphic</Content>
      <Content>
        Here is just a quick start to some Greek. The best way is to learn the alphabet and try
        pronouncing and writing out some words in Greek yourself. You can always use this to impress
        your buddies or understand origins of words. If you are bad at remembering long words in
        English, Greek always helps. Say for instance you can never remember what anthropology means
        in English. Well you now know the word ανθρωπος in Greek means "man" and a further extension
        of that would be anthropology or the study of man. This can be used for a whole range of
        words because Greek and Latin heavily influenced our present languages today. Next lesson
        will be more interactive as I will be installing some check boxes so you can try out your
        Greek sentences real time!
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

export default Greek;
