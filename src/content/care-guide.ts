export type CareSection = {
  title: string;
  paragraphs?: string[];
  points?: { label: string; text: string }[];
};

export type CareFaq = { question: string; answer: string };

export type CareGuideContent = {
  name: "Terrariums" | "Kokedama";
  slug: "terrariums" | "kokedama";
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  about: string[];
  processTitle: string;
  processIntro: string;
  process: { number: string; title: string; description: string }[];
  careTitle: string;
  careIntro: string;
  care: CareSection[];
  precautions: { title: string; text: string }[];
  faqs: CareFaq[];
};

export const careGuides: Record<CareGuideContent["slug"], CareGuideContent> = {
  terrariums: {
    name: "Terrariums",
    slug: "terrariums",
    heroTitle: "Nurture the Living Landscape.",
    heroDescription:
      "A guide to looking after your Sylva Auris terrarium, covering light, water, airflow and the questions new owners most often ask.",
    aboutTitle: "Understanding the ecosystem.",
    about: [
      "A terrarium is a planted arrangement held within glass. Water evaporates from the substrate and leaves, collects as condensation on the cooler glass, and returns to the growing medium, where the roots absorb it.",
      "In a closed terrarium this cycle largely takes place within the glass, so very little water needs to be added. An open terrarium exchanges air with the room and loses moisture more quickly, so it needs more regular attention. In both cases the plants are alive and need appropriate care.",
    ],
    processTitle: "A considered foundation.",
    processIntro:
      "The terrarium is built from a drainage bed upward. Moss and vegetation are surface planting, above the substrate layers.",
    process: [
      { number: "01", title: "Gravel drainage bed", description: "A bottom layer where excess water can collect beneath the growing medium. It does not replace careful watering." },
      { number: "02", title: "Activated charcoal", description: "A thin layer sits above the gravel and below the growing medium." },
      { number: "03", title: "Growing medium", description: "Peat moss, coco chips and perlite form the medium for root growth." },
      { number: "04", title: "Surface planting", description: "Plants and moss are arranged above the substrate to form the living surface of the composition." },
    ],
    careTitle: "The three metrics of balance.",
    careIntro:
      "Light, water and airflow work together to keep a terrarium balanced. Closed and open terrariums manage each of them differently.",
    care: [
      { title: "Light", points: [
        { label: "All terrariums", text: "Keep in bright, indirect natural light. Direct sunlight can heat the glass and damage the plants." },
        { label: "Closed", text: "Place away from windows that receive prolonged direct sunlight." },
        { label: "Open", text: "Provide bright, indirect light in a space with gentle natural airflow." },
      ] },
      { title: "Water", paragraphs: ["Water sparingly. Aim for light, even moisture without leaving the substrate saturated."], points: [
        { label: "Closed", text: "Mist lightly only when condensation is consistently absent or the substrate begins to look dry. Do not water simply because a number of days has passed." },
        { label: "Open", text: "Check the moss and growing medium regularly. A light mist every 2–3 days may be needed, depending on room conditions." },
      ] },
      { title: "Airflow", points: [
        { label: "Closed", text: "A light mist on the glass is normal. If heavy condensation remains for more than 24 hours, open the lid for 2–3 hours to release excess moisture." },
        { label: "Open", text: "No manual ventilation is needed. Normal room airflow is enough." },
      ] },
      { title: "Placement", paragraphs: ["Choose a stable indoor position with bright, indirect natural light. Keep the terrarium away from prolonged direct sunlight, heaters and air-conditioner vents, and avoid sudden temperature changes or places where it could be knocked."] },
    ],
    precautions: [
      { title: "Overwatering", text: "Too much water can saturate the substrate, damage roots and cause persistent condensation. Add water in small amounts and check before adding more." },
      { title: "Direct sunlight", text: "Direct sunlight heats the glass and can damage the plants. Choose bright, indirect natural light." },
      { title: "Opening a closed terrarium unnecessarily", text: "Frequent opening disturbs the moisture balance. Open it to release heavy condensation or carry out maintenance." },
      { title: "Chemical fertilisers", text: "Additional fertiliser is generally unnecessary and can cause excessive growth or upset the balance of the arrangement." },
      { title: "Heaters and air conditioners", text: "Strong heat and dry airflow stress the plants and change moisture levels. Choose a stable indoor position away from direct heating or cooling." },
    ],
    faqs: [
      { question: "How often should I water my terrarium?", answer: "There is no single schedule for every terrarium. Closed terrariums need very little additional water. Mist lightly when condensation is consistently absent or the substrate begins to look dry. Open terrariums lose moisture more readily and may need light misting every 2–3 days, depending on their surroundings." },
      { question: "Where should I place my terrarium?", answer: "Choose a stable indoor position with bright, indirect natural light. Keep it away from prolonged direct sunlight, heaters and air-conditioner vents. Avoid places where it could be knocked or exposed to sudden temperature changes." },
      { question: "Why is there condensation inside the glass?", answer: "Condensation is part of the moisture cycle. Water evaporates from the substrate and plants, collects on the cooler glass and returns to the growing medium. A light mist on the glass is normal. If heavy condensation remains for more than 24 hours, open the lid for 2–3 hours." },
      { question: "Can I open my terrarium?", answer: "A closed terrarium does not need to be opened routinely. Open it when heavy condensation persists, or when maintenance is needed, such as removing damaged plant material." },
      { question: "How long will my terrarium last?", answer: "A terrarium is a living arrangement, not a permanent or maintenance-free object. How long it lasts depends on suitable light, careful watering and occasional upkeep. With the right conditions, the plants and composition can be enjoyed for a long time, and the arrangement will change as the plants grow." },
      { question: "What should I do if a leaf dies?", answer: "Remove dead or decaying leaves carefully with clean tools so they do not remain in the arrangement. If leaves keep dying, check the light, moisture and airflow conditions." },
    ],
  },
  kokedama: {
    name: "Kokedama",
    slug: "kokedama",
    heroTitle: "Kokedama. Living Art.",
    heroDescription:
      "Kokedama is a traditional Japanese botanical art form. This guide explains how to care for your Sylva Auris Kokedama and keep it healthy.",
    aboutTitle: "A plant held in moss.",
    about: [
      "Kokedama is a Japanese technique in which a plant is grown in a prepared ball of growing medium wrapped in natural moss. The moss ball holds the roots and moisture, and forms the visible surface of the piece.",
      "A Kokedama has no glass enclosure, so its care differs from that of a terrarium. The moss ball needs regular checking, and watering depends on how it feels rather than on a fixed routine.",
    ],
    processTitle: "How a Kokedama is made.",
    processIntro: "Each Kokedama is made in six stages, from choosing the plant to the final check.",
    process: [
      { number: "01", title: "Plant selection", description: "A healthy plant is chosen for its form and suitability for indoor display." },
      { number: "02", title: "Growing medium", description: "Coco chips, peat moss and perlite are blended into a medium that holds moisture while allowing air to reach the roots." },
      { number: "03", title: "Structural wrapping", description: "A fine mesh layer holds the growing medium in its rounded shape." },
      { number: "04", title: "Moss envelope", description: "Natural moss is wrapped around the structure to form the living surface of the piece." },
      { number: "05", title: "Hand finishing", description: "Each piece is shaped and finished by hand, with attention to balance and form." },
      { number: "06", title: "Quality check", description: "Plant health, structure and finish are checked before the piece is ready for its owner." },
    ],
    careTitle: "Five essential care principles.",
    careIntro: "Light, water, humidity, placement and maintenance keep a Kokedama healthy.",
    care: [
      { title: "Light", paragraphs: ["Keep your Kokedama in bright, indirect natural light. Avoid prolonged direct afternoon sunlight, which can scorch the moss and stress the plant."] },
      { title: "Water", paragraphs: ["Water according to the condition of the moss ball, not a fixed schedule. When it feels noticeably lighter or begins to dry, soak it in clean water for 10–15 minutes. Let the excess water drain completely before returning it to its place."] },
      { title: "Humidity", paragraphs: ["Kokedama generally prefer moderate to high humidity. In dry indoor conditions, light misting around the moss can slow drying. Misting does not replace soaking when the moss ball needs water."] },
      { title: "Placement", paragraphs: ["Display your Kokedama on a desk, shelf or table, or hang it if it has been prepared for hanging. Choose a position with bright, indirect light and gentle airflow, away from heaters and air-conditioner vents."] },
      { title: "Maintenance", paragraphs: ["Remove damaged or dead leaves as they appear. Rotate the Kokedama occasionally so the plant receives light evenly. Check the moss ball regularly to make sure it does not dry out completely."] },
    ],
    precautions: [
      { title: "Overwatering", text: "Wait until the moss ball feels slightly lighter before soaking again. Excess moisture can damage the roots and the moss." },
      { title: "Standing in water", text: "After soaking, let the Kokedama drain thoroughly. Do not leave the moss ball sitting in a pool of water." },
      { title: "Direct afternoon sunlight", text: "Strong direct sunlight can scorch the moss and stress the plant. Bright, filtered or indirect light is better." },
      { title: "Heaters and air conditioners", text: "Dry airflow and sudden temperature changes disturb the moisture balance of the moss ball. Keep the Kokedama away from direct heating and cooling." },
      { title: "Letting the moss dry out completely", text: "Check the moss ball regularly. Water it when it feels noticeably lighter or the moss begins to look dry." },
    ],
    faqs: [
      { question: "How often should I water my Kokedama?", answer: "There is no fixed schedule. Soak the moss ball when it feels noticeably lighter or begins to dry. Depending on indoor conditions, this may be roughly every 4–5 days, but always check the moss ball rather than relying on the calendar." },
      { question: "Can Kokedama live indoors?", answer: "Yes. A Kokedama can be displayed indoors when the plant receives bright, indirect light and the moss ball is kept suitably moist. Choose a position away from harsh direct sunlight, heaters and air-conditioner vents." },
      { question: "Does the moss need special care?", answer: "The moss should not be allowed to dry out completely. Check it regularly, and soak the Kokedama when the ball feels noticeably lighter or the moss begins to dry. Light misting can help in dry indoor conditions." },
      { question: "Can I hang my Kokedama?", answer: "Yes, if it has been prepared with a secure hanging method. If yours is designed for a shelf or tabletop, keep it on a stable surface rather than adding an improvised support." },
      { question: "How long will a Kokedama last?", answer: "A Kokedama is a living plant arrangement, so how long it lasts depends on the plant, the growing conditions and the care it receives. Suitable light, attentive watering and occasional maintenance help it stay healthy over time." },
    ],
  },
};
