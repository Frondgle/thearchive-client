import styles from '@/components/Blurb/Blurb.module.css';

export default function AboutBlurbContent() {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.paragraph}>
                Hiding behind a black lace veil, “<span className={styles.highlight}>call me SONATORE</span>,” says the artist, musician, Polaroid photographer, and possible self-described digital avatar. A juxtaposition in 2021 — art and music constructed on vintage aesthetics but living its life on the internet. SONATORE, or <span className={styles.highlight}>Alex Red</span>, might seem like a time traveler from a different era, but the artist himself rejects that notion. What makes Red seem unusual in modernity is his tendency to take vintage sounds and aesthetics and present them with modern sensibilities. 
            </div>
            <div className={styles.paragraph}>
                Growing up in Nashville, TN the artist found himself studying classical music and high art. Somewhere in high school and college he made the leap to indie rock, emo, and electronic music. “<span className={styles.highlight}>I grew up as a closeted gay Asian boy, and there was a lot of solace I found being able to immerse myself in art and music instead of thinking of who I am</span>,” says Red. The nostalgic and vintage aspects of his work act as a cushion to the realities of the current times, but he warns, “<span className={styles.highlight}>Remember, nostalgia is ultimately a liar</span>.” 
            </div>
            <div className={styles.paragraph}>
                At this point in the artist’s development, he has come to accept those parts of himself, and his work is a reflection of those struggles that are still encountered as a marginalized person in 2021.
            </div>
            <div className={styles.paragraph}>
                Sonatore was an American-Taiwanese singer-songwriter fusing pop, electronica, and emo to create his own unique style. Which he described as E(mo)DM and Art school pop.
            </div>
            <div className={styles.signature}>
                - The bio above was written by SONATORE himself in 2021
            </div>
        </div>
    );
}