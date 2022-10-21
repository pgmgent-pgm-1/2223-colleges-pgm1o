/*

    id
    band (object)
        name
        synopsis
        socials (object)
            website
            facebook
            twitter
            instagram
        picture (object)
            small
        media (array van objecten)
            link
            type
    place (object)
        name
    from
    to
    isHeadliner
    reviews  (array van objecten)
        rating
        comment
        reviewedAt

    comments (array van objecten)
        nickName
        message
        comments (array van objecten)
            ...
*/

const lineup = [
  {
    id: '54337834-476a-4ba1-aa42-62bd0a9b5a9c',
    band: {

    },
    place: {

    },
    from: 1656622800000,
    to: 1656630900000,
    isHeadliner: true,
    reviews: [
      {
        rating: 9,
        comment: 'First of all, wow! The show immediately grabs you with its first couple of scenes, letting you know that this show is going to have a more adult tone. Seeing the workings of everyday people in the galaxy, the perspective of an imperial loyalist, and a thief making his way through the galaxy is so thrilling and exciting. The big and little details you get out of all the varying cultures on different planets allows you to completely melt into and engross yourself in the Star Wars galaxy, which is what many of us love so much.',
        reviewedAt: 1656756900000,
      },
      {
        rating: 7,
        comment: 'eyruiyzerez rezrezr  sdfghjklm dfghjkl dfghjk',
        reviewedAt: 1656873180000,
      },
    ],
    comments: [
      {
        nickName: 'JaPPa03',
        message: 'In feite zijn deze camera’s een soort update die je doorgaans na interne feedback zou doorvoeren voordat je een product op de markt brengt. Vooral de dual card slot is iets wat ze verkeerd hebben ingeschat terwijl het geen nieuwe kritiek is op camera’s.',
        comments: [
          {
            nickName: 'Inoble',
            message: 'Precies dat idee heb ik ook, een gevalletje D600, 800 > 610, 810. An sich natuurlijk een prima camera en feitelijk (aannemend) beter dan de voorgangers maar een upgrade niet waard wanneer je met Nikon schiet en graag bij Nikon wilt blijven.',
            comments: [
              {
                nickName: 'flappie',
                comments: 'Ik zeg wat ik wil. We leven in een democratie, me dunkt.'
              }
            ]
          }
        ]
      },
      {

      },
    ]
  },
];

function getStringForReviews(reviews) {
  let tmpStr = '';
  let i = 0;
  for (let review of reviews) {
    tmpStr += getStringForReview(review, i);
    i++;
  }
  return tmpStr;
}

function getStringForReview(review, i) {
  let tmpStr = '';
  tmpStr += `
Review ${i + 1}\t${review.comment}
  `;
  return tmpStr;
}

const output = getStringForReviews(lineup[0].reviews);
console.log(output);