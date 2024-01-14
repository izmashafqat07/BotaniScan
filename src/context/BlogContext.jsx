import React, { createContext, useContext } from "react";
import appleImg from "./../assets/apple-home-blog.jpg";
import grapeImg from "./../assets/grape-home-blog.jpg";
import tomatoImg from "./../assets/tomato-home-blog.webp";
import plantDieseaseImg from "./../assets/plantdisease.jpg";
import tomatoDieseaseImg from "./../assets/tomatodisease.jpg";
import grapeDieseaseImg from "./../assets/grapedisease.jpg";
import appleDieseaseImg from "./../assets/appledisease.jpg";
import plantDisordersImg from "./../assets/plantdisorders.webp";
import diagnosePlantImg from "./../assets/diagnosingplant.jpg";
import "./../styles/blogcontext.css";

//context api for providing blogs data

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const blogData = [
    {
      id: 1,
      image: appleImg,
      title: "Apple plant",
      mainBlog:
        "Apple trees are generally small trees, and a given variety can be grafted onto dwarfing or semi-dwarfing rootstocks for smaller and less vigorous plants The apple itself is a pome (fleshy) fruit, in which the ripened ovary and surrounding tissue both become fleshy and edible. When harvested, apples are usually roundish, 5–10 cm (2–4 inches) in diameter, and some shade of red, green, or yellow in colour...",
      content: (
        <div>
          <h1>Physical Description</h1>
          <p className="justified-text">
            Apple trees are generally small trees, and a given variety can be
            grafted onto dwarfing or semi-dwarfing rootstocks for smaller and
            less vigorous plants. If left untrimmed, a tree grown with standard
            (seedling) rootstock will often reach a height of 9 metres (30 feet)
            with an equally large crown diametre. The bark is usually brown and
            scaly. The simple leaves are roughly oval in shape and usually have
            fine teeth along the margins. Apple flowers are showy with five
            white petals, often tinged with pink, and numerous stamens. The
            flowers are pollinated by bees and other insects, and most varieties
            require cross-pollination for fertilization. <br /> The apple itself
            is a pome (fleshy) fruit, in which the ripened ovary and surrounding
            tissue both become fleshy and edible. When harvested, apples are
            usually roundish, 5–10 cm (2–4 inches) in diameter, and some shade
            of red, green, or yellow in colour; they vary in size, shape, and
            acidity depending on the variety, of which there are thousands.
            Apple varieties fall into three broad classes: (1) cider varieties,
            (2) cooking varieties, and (3) dessert varieties, which differ
            widely but tend to emphasize colour, size, aroma, smoothness, and
            perhaps crispness and tang. Many varieties are relatively high in
            sugar, only mildly acidic, and very low in tannin. In the United
            States, popular dessert varieties include the Honeycrisp, Red
            Delicious, Gala, Granny Smith, and Golden Delicious. Apple varieties
            that ripen during late summer are generally of poor quality for
            storage, while those that ripen in late autumn may be stored for as
            long as one year. For long holding, temperatures only slightly above
            the freezing point of the fruit are generally desirable. Apples may
            also be stored in inert gases or in controlled atmospheres. <br />
          </p>

          <h1>Cultivation</h1>
          <p className="justified-text">
            Since the apple requires a considerable period of dormancy, it
            thrives in areas having a distinct winter period, generally from
            latitude 30° to 60°, both north and south. Northward, apple growing
            is limited by low winter temperatures and a short growing season.
            The soils in which apple trees grow must be well drained;
            fertilizers can be used if the yield is not high enough. Rolling
            hilltops or the sloping sides of hills are preferred because they
            provide “air drainage,” allowing the colder, heavier air to drain
            away to the valley below during frosty spring nights, when blossoms
            or young fruit would be destroyed by exposure to cold. <br />
            Scions of desired varieties are commonly grafted onto hardy nursery
            seedlings of about 18 months of age; orchard planting follows one or
            two years later. Management during the six to eight years before
            appreciable apple production is reached may consist of little more
            than protection from competing vegetation and pests. Careful
            attention to pruning is required, however, especially during the
            first five years, so that the main scaffold branches will be well
            distributed along the trunk and to prevent development of weak
            crotches, which can break under heavy fruit loads. With mature
            trees, a rigorous spraying regime must be followed to protect
            against insect pests and diseases and possibly to delay spring
            development, to thin young fruit, and to hold the autumn drop of
            ripening fruit to a minimum.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      image: grapeImg,
      title: "Grape plant",
      mainBlog:
        "The grape is usually a woody vine, climbing by means of tendrils (modified branches) and when untrained often reaching a length of 17 metres (56 feet) or more. In arid regions it may form an almost erect shrub...",
      content: (
        <>
          <h1>Physical Description</h1>
          <p className="justified-text">
            The grape is usually a woody vine, climbing by means of tendrils
            (modified branches) and when untrained often reaching a length of 17
            metres (56 feet) or more. In arid regions it may form an almost
            erect shrub. The edible leaves are alternate, palmately lobed, and
            always tooth-edged. Small greenish flowers, in clusters, precede the
            fruit, which varies in colour from almost black to green, red, and
            amber. Botanically, the fruit is a berry, more or less globular,
            within the juicy pulp of which lie the seeds. In many varieties the
            fruit develops a whitish powdery coating, or bloom. <br />
            Grapes contain such minerals as calcium and phosphorus and are a
            source of vitamin A. All grapes contain sugar (glucose and fructose)
            in varying quantities depending upon the variety. Those having the
            most glucose are the most readily fermented.
          </p>

          <h1>Cultivation</h1>
          <p className="justified-text">
            Wine grapes require long, dry, warm-to-hot summers and cool winters
            for their best development. Severe winter conditions destroy
            unprotected vines; spring frosts occurring after the vines start
            growth will kill the shoots and clusters. Grapes are adapted to a
            wide range of soils, ranging from blow sands to clay loams, from
            shallow to very deep soils, from highly calcareous to noncalcareous
            soils, and from very low to high fertility. <br /> Commercial grape
            varieties are propagated with cuttings, segments or canes, or
            grafts. Cuttings are usually grown for one year in a nursery to
            develop roots. The grafts consist of a segment of a stem of a
            fruiting variety placed on a rootstock cutting. The rootstock
            cuttings are field budded to the desired fruiting variety in late
            summer after being planted in the vineyard. The point of union of
            grafted or budded vines must be situated well above the ground level
            in order to prevent the production of scion roots.
          </p>
        </>
      ),
    },
    {
      id: 3,
      image: tomatoImg,
      title: "Tomato plant",
      mainBlog:
        "Tomato plants are generally much branched, spreading 60–180 cm (24–72 inches) and somewhat trailing when fruiting, but a few forms are compact and upright. Leaves are more or less hairy, strongly odorous...",
      content: (
        <>
          <h1>Physical Description</h1>
          <p className="justified-text">
            Tomato plants are generally much branched, spreading 60–180 cm
            (24–72 inches) and somewhat trailing when fruiting, but a few forms
            are compact and upright. Leaves are more or less hairy, strongly
            odorous, pinnately compound, and up to 45 cm (18 inches) long. The
            five-petaled flowers are yellow, 2 cm (0.8 inch) across, pendant,
            and clustered. Fruits are berries that vary in diameter from 1.5 to
            7.5 cm (0.6 to 3 inches) or more. They are usually red, scarlet, or
            yellow, though green and purple varieties do exist, and they vary in
            shape from almost spherical to oval and elongate to pear-shaped.
            Each fruit contains at least two cells of small seeds surrounded by
            jellylike pulp.
          </p>
          <h1>Cultivation</h1>
          <p className="justified-text">
            The plant requires relatively warm weather and much sunlight; it is
            grown chiefly in hothouses in cooler climates. Tomatoes are usually
            staked, tied, or caged to keep the stems and fruits off the ground,
            and consistent watering is necessary to avoid blossom-end rot and
            cracking of the fruits. The plants are susceptible to a number of
            pests and diseases, including bacterial wilt, early blight, mosaic
            virus, Fusarium wilt, nematodes, and tomato hornworms. Many of these
            problems can be controlled with crop rotation, the use of fungicides
            and pesticides, and the planting of resistant varieties. The tiny
            currant tomato (S. pimpinellifolium) is a closely related species
            and has been used by breeders to hybridize several pest- and
            disease-resistant tomato varieties.
          </p>
        </>
      ),
    },
    {
      id: 4,
      image: plantDieseaseImg,
      title: "Plant Disease",
      mainBlog:
        "A plant disease is defined as “anything that prevents a plant from performing to its maximum potential.” This definition is broad and includes abiotic and biotic plant diseases...",
      content: (
        <>
          {" "}
          <p className="justified-text">
            A plant disease is defined as “anything that prevents a plant from
            performing to its maximum potential.” This definition is broad and
            includes abiotic and biotic plant diseases.
          </p>
          <h1>Abiotic or non-infectious diseases</h1>
          <p className="justified-text">
            These diseases are caused by conditions external to the plant, not
            living agents. They cannot spread from plant to plant, but are very
            common and should be considered when assessing the health of any
            plant. Examples of abiotic diseases include nutritional
            deficiencies, soil compaction, salt injury, ice, and sun scorc
          </p>
          <h1>Biotic or infectious diseases</h1>
          <p className="justified-text">
            These diseases are caused by living organisms. They are called plant
            pathogens when they infect plants. For the purposes of discussing
            plant pathology, only plant disease pathogens will be discussed.
            Pathogens can spread from plant to plant and may infect all types of
            plant tissue including leaves, shoots, stems, crowns, roots, tubers,
            fruit, seeds and vascular tissues
          </p>
          <h1>Types of Plant Pathogens</h1>
          <h3>Bacteria</h3>
          <p className="justified-text">
            Bacteria are single-celled microscopic organisms with cell walls
            that reproduce by binary fission (one cell splits into two).
            Introduction to the plant must occur through natural openings or
            wounds in the plant. Bacteria overwinter primarily in soil and in or
            on plant material that does not decompose, but some survive inside
            insect vectors
          </p>
          <h3>Phytoplasmas</h3>
          <p className="justified-text">
            Phytoplasmasare microscopic, bacteria-like organisms that lack cell
            walls and thus appear filamentous
          </p>
          <h3>Viruses and viroids</h3>
          <p className="justified-text">
            Viruses are intracellular (live inside the cell) nucleic acid
            particles with a protein coat that infect other living organisms and
            replicate in the hosts they infect. Viroids are virus-like particles
            but lack a protein coat. Viruses and viroids are primarily
            transmitted by vectors including insects, nematodes, and fungi,
            which introduce the virus or viroid during feeding. Viruses and
            viroids can also be transmitted through seed, vegetative propagation
            and pruning
          </p>
          <h3>Nematodes</h3>
          <p className="justified-text">
            Nematodes are microscopic worm-like animals. The majority of
            nematodes are soil dwelling animals and move with soil. However,
            there are some nematodes that are transmitted through insects and
            infect above ground plant parts
          </p>
        </>
      ),
    },
    {
      id: 5,
      image: tomatoDieseaseImg,
      title: "Tomato diseases",
      mainBlog:
        "Some of the most common fungal diseases that infect tomatoes grown in the home garden include Anthracnose fruit rot, Early blight, Septoria leaf spot, Late blight...",
      content: (
        <>
          <p className="justified-text">
            Some of the most common fungal diseases that infect tomatoes grown
            in the home garden include Anthracnose fruit rot, Early blight,
            Septoria leaf spot, Late blight, and Buckeye rot all which produce
            distinct symptoms making them easily diagnosable by the home
            gardener.
          </p>
          <h1>Anthracnose Fruit Rot</h1>
          <p className="justified-text">
            Anthracnose fruit rot is a soil-borne disease that affects ripe
            tomato fruit. Infections go unnoticed on green fruit and as fruit
            ripens depressed circular water-soaked spots appear on red fruit.
            These spots may slowly enlarge to about 1/4-inch in diameter and
            produce black fungal structures (microsclerotia) in the center of
            the lesion just below the skin surface. Microsclerotia can
            overwinter in the soil and serve as a source of inoculum for the
            next growing season.
          </p>
          <h1>Early Blight</h1>
          <p className="justified-text">
            Early blight can infect tomato foliage and fruit. On tomato foliage,
            Early blight first appears as circular irregular black or brown
            spots on the older leaves of the plant. As these lesions enlarge a
            series of dark concentric rings develop in the center of the spot
            creating a distinct target pattern. Over time the tissue surrounding
            the early blight lesions can yellow and cause the leaves to drop.
            Severe infestations of this disease can cause 100% defoliation of
            the plant.
          </p>
          <h1>Septoria Leaf Spot</h1>
          <p className="justified-text">
            Septoria leaf spot is a soil-borne fungal disease that only infects
            tomato leaves and stems. The spots enlarge to 1/8-inch in diameter
            and are distinguished by a dark brown edge with a white or gray
            center. As the disease develops and more leaf spots develop, the
            areas surrounding spots will turn yellow causing leaves to wither
            and die. The disease spreads from the older leaves upward and can
            totally defoliate a plant in a short period of time. Defoliation can
            severely inhibit yield and lead to sunscald injury and fruit
            cracking. If tomato plants become infected with Septoria leaf spot
            early in the growing season, plants can become 100% defoliated
            before fruit set.
          </p>
          <h1>Late Blight</h1>
          <p className="justified-text">
            Late blight is the disease historically associated with potatoes and
            the Irish potato famine of the mid-1800's. The Late blight fungus
            can also infect tomato plantings. The disease will first appear as
            greasygrayish indefinite patches on older leaves and stems. These
            spots enlarge in moist weather and may produce white fuzzy growth on
            the underside of infected leaves. The fungus will also attack fruit
            causing a dark, greasy colored lesion with a slightly sunken, rough
            surface on green fruit. These lesions may enlarge turning the whole
            fruit brownish-black. Infected fruit often remain firm. Severe
            infestations can cause the foliage to brown and shrivel.
          </p>
          <h1>Control Measures</h1>
          <p className="justified-text">
            There are a number of cultural practices that can be used to help
            reduce tomato disease in the home garden. The first cultural
            practice is to remove old plant debris. Fungal spores can overwinter
            in infected plant debris and on weeds related to tomato, such as
            horse nettle, ground cherry, and night shade. During the next
            growing season overwintering fungal spores are splashed from
            infested tomato or weed debris in the soil on to newly planted
            tomatoes restarting the disease cycle. <br /> Proper sanitation
            measures can keep spores from infecting the next crop. At the end of
            the growing season all tomato refuse should be removed and
            discarded, composted (if the pile is hot enough to kill the spores)
            or tilled into the soil. Thoroughly burying the residue will keep
            the spores below the soil surface and away from tomatoes. <br />
            Crop rotation is another means to help reduce disease in tomato
            plantings. Each year plant tomatoes in a new location away from
            areas where tomatoes, eggplant, potatoes or peppers have grown in
            the past. These vegetables all have similar disease problems. A
            minimum rotation of three years is considered essential to help
            reduce populations of soil-borne fungi.
            <br />A second line of defense against leaf spot diseases is to
            alter the microclimate surrounding tomato plants. Fungi thrive in
            moist, humid conditions, in particularly on leaves that remain wet
            for long periods of time. Tomatoes should be grown in full sun with
            good air circulation to dry the leaves. Staking or caging tomatoes
            brings the plants up off the soil and allows more rapid drying of
            the plant.
          </p>
        </>
      ),
    },
    {
      id: 6,
      image: grapeDieseaseImg,
      title: "Grape diseases",
      mainBlog:
        "The fungus pathogen overwinters in mummified berries from the previous season’s crop...",
      content: (
        <>
          <h1>Black Rot</h1>
          <p className="justified-text">
            Black rot is a fungal disease that causes brown, circular leaf spots
            and reduces many berries to black, shriveled, raisin-like mummies.
            The fungus pathogen overwinters in mummified berries from the
            previous season’s crop. Spores are released during wet periods
            before bloom when new shoots first emerge. Young leaves are infected
            first. The brown leaf lesions have many tiny, black, pimple-like
            structures in their centers that produce thousands of other spores
            that can infect the fruit. In general, the leaves are susceptible to
            infection for about 1 week until they are fully expanded; however,
            the fruit is susceptible until just before ripening when berry color
            is developing. As the skin thickens with ripening the fruit is much
            less vulnerable. There are no resistant cultivars. Minimize black
            rot problems by removing infected fruit, cleaning up mummies, and
            pruning out leaves that surround fruit clusters. Preventative
            fungicide sprays are a necessity to ensure a crop of edible fruit.
            If using organic sprays, be aware that sulfur may burn the foliage
            of certain varieties (e.g. Concord) and is not as effective as
            Bordeaux.
          </p>
          <h1>Gray mold</h1>
          <p className="justified-text">
            Gray mold or bunch rot is caused by a nearly ubiquitous fungus
            (botrytis) that infects flowers in bloom, as well as ripening fruit.
            Infections that occur during bloom may go unnoticed because the
            pathogen remains latent until the fruit’s sugar levels rise as
            ripening occurs. Once the fruit rot symptoms develop, the pathogen
            moves through the cluster stem infecting all or most of the berries
            in a cluster. Infections also can become established in ripening
            fruit when this fungus enters berries injured by the grape berry
            moth.
          </p>
          <h1>Septoria leaf spot</h1>
          <p className="justified-text">
            Septoria leaf spot, also called méelanose, mainly affects American
            Vitis and muscadine grapes. Angular, reddish brown to black spots 1
            to 2 mm in diameter appear after midseason. Nearing veraison,
            lesions become larger with diffuse margins. Fruiting bodies may be
            seen with a hand lens. The area surrounding the spots may be yellow.
            The fungus overwinters in infected leaf debris.
          </p>
          <h1>Leaf blotch</h1>
          <p className="justified-text">
            Leaf blotch can affect many types of grapes but is most often found
            on leaves of American rootstock cultivars. Leaf lesions appear after
            mid-season. Lesion size ranges from 1/25 inch to 2 inches (1 to 50
            mm). Small lesions have dark margins, and large lesions have
            light-colored, zonate rings. Stalked fruiting structures are
            produced within 3 to 4 days of the appearance of the lesion, usually
            on the lower leaf surface. The fungus may also sporulate on overripe
            berries. The fungus overwinters in infected plant debris.
          </p>
          <h1>Control Measures</h1>
          <p className="justified-text">
            Effective control measures for preventing grape diseases involve a
            comprehensive and integrated approach. Begin by carefully selecting
            the site and grape varieties, opting for disease-resistant varieties
            when possible. Implement proper pruning and training techniques to
            enhance air circulation and sunlight exposure, reducing the
            conditions favorable for disease development. Sanitation practices
            are crucial—promptly remove and destroy any infected plant material
            to prevent the spread of diseases, and maintain a weed-free
            environment to eliminate potential disease reservoirs. <br />
            Regular monitoring is essential for early detection of any signs of
            diseases. Integrated Pest Management (IPM) plays a key role,
            incorporating biological controls and cultural practices alongside
            judicious use of fungicides. Employing disease-resistant rootstocks
            provides an added layer of protection, and managing water resources
            efficiently—avoiding overhead irrigation and watering in the
            morning—helps minimize conditions conducive to fungal infections. A
            focus on soil health, including maintaining proper pH and nutrient
            levels, further contributes to the overall resilience of grapevines.
            Additionally, ongoing education and training for vineyard workers on
            disease recognition and preventive practices are fundamental to a
            successful disease control strategy. By combining these measures,
            vineyard managers can establish a proactive defense against grape
            diseases, promoting the long-term health and productivity of the
            grape crop.
          </p>
        </>
      ),
    },
    {
      id: 7,
      image: appleDieseaseImg,
      title: "Apple diseases",
      mainBlog:
        "Yellow or chlorotic spots on leaves; dark olive green spots on leaves...",
      content: (
        <>
          <h1>Apple Scab</h1>
          <p className="justified-text">
            Yellow or chlorotic spots on leaves; dark olive green spots on
            leaves and fruit; may be a velvety growth on spots on undersides of
            leaves; twisting of leaves; distorted leaves; severely infected
            leaves turn yellow and drop from tree. <br />
            Yellow or chlorotic spots on leaves; dark olive green spots on
            leaves and fruit; may be a velvety growth on spots on undersides of
            leaves; twisting of leaves; distorted leaves; severely infected
            leaves turn yellow and drop from tree.
          </p>
          <h1>Black rot</h1>
          <p className="justified-text">
            Purple flecks or circular lesions which are brown in the centre and
            purple at margin; red flecks, purple lesions and/or brown black
            rings on fruit. <br />
            Remove dead wood, mummified fruit and cankers from trees to reduce
            spread of disease; burn any prunings that have been made from the
            tree; disease can be controlled by applying fungicides from silver
            tip to harvest.
          </p>
          <h1>Cedar apple rust</h1>
          <p className="justified-text">
            Bright orange or yellow patches on top side of leaves surrounded by
            a red band and small black spots in the center; by mid-summer,
            cup-like structures called aecia form on the leaf undersides; these
            become covered in tubular structures from which spores are released.{" "}
            <br />
            Fungus requires two hosts to complete lifecycle; forms galls on
            Eastern red cedar and spores are carried by wind to apple; use
            caution when planting apple close to red cedar. <br />
            Plant resistant varieties where possible; remove nearby red cedar;
            if growing susceptible varieties in proximity to red cedar follow a
            fungicide program.
          </p>
          <h1>Control Measures</h1>
          <p className="justified-text">
            Effectively managing apple diseases requires a multifaceted approach
            encompassing cultural, biological, and chemical control measures.
            Begin with orchard site selection, opting for well-drained locations
            with adequate sunlight and proper spacing between trees to promote
            air circulation. Choosing disease-resistant apple varieties suitable
            for the local climate is a proactive step in disease prevention.
            Pruning and thinning practices should be employed to enhance
            sunlight penetration and air movement within the canopy, minimizing
            conditions conducive to diseases like powdery mildew and fire
            blight. <br />
            Implementing a regular spray program with fungicides and
            bactericides is crucial, particularly during critical growth stages
            such as bloom and fruit development. Adopting Integrated Pest
            Management (IPM) strategies, including the use of natural predators
            and beneficial insects, can help control pest populations and reduce
            the reliance on chemical interventions. Additionally, thorough
            sanitation practices, such as the prompt removal and disposal of
            infected plant material and fallen leaves, contribute significantly
            to disease prevention. Regular monitoring for early detection of
            symptoms, combined with cultural practices like proper irrigation
            management and soil health maintenance, completes a comprehensive
            approach to controlling apple diseases, ensuring the long-term
            health and productivity of orchards.
          </p>
        </>
      ),
    },
    {
      id: 8,
      image: plantDisordersImg,
      title: "Plant Disorders",
      mainBlog:
        "People, rather than insects or diseases, are often responsible for a plant's problems...",
      content: (
        <>
          <h1>Physical</h1>
          <p className="justified-text">
            People, rather than insects or diseases, are often responsible for a
            plant's problems. Plant problems caused by people can be categorized
            as physical or mechanical. These problems include poor planting
            methods that allow limited area for root growth, improper mulching,
            construction-related injury, soil compaction, girdling of stems or
            trunks, or improper pruning. For example, plants should be pruned in
            the fall, just prior to dormancy. Pruning during the growing season
            can injure the plant and, if infected purning shears are used,
            introduce a pathogen to the open wound. <br />
            Storms that produce high winds, heavy snow, or ice can cause
            considerable tree damage. Damage from hail or lightning strikes can
            kill trees, crops and ornamental plants. However, plant death
            resulting from a moderate weather event is often the sign of a
            preexisting condition. <br />n some cases, physical problems can be
            corrected and the plant will recover. For example, proper pruning to
            remove torn limbs might allow a tree to recover from minor damage
            after a storm. Plants that were given a bad start through incorrect
            planting methods, however, often cannot be saved. By the time
            symptoms appear, you may be unable to address the cause and restore
            plant vigor.
          </p>
          <h1>Environmental</h1>
          <p className="justified-text">
            Environmental factors are the most common source of a plant
            disorder. Often, symptoms develop on one side of the plant, or group
            of plants, based on where stress occurred (Figure 3). Other times
            the entire plant may be affected. <br />
            Extremes in temperature and moisture are common environmental
            culprits. Drought stress can cause leaf scorch, leaf drop or even
            branch dieback. Cold injury in winter can cause leaf burn and
            dieback of evergreens. When the soil is saturated for many days
            during the growing season, plants may develop yellowed foliage
            because of the lack of oxygen in the soil or poor nutrient uptake
            from nonfunctioning roots. <br />
            Too much or too little shade is a typical problem. For example,
            hydrangeas commonly wilt and scorch when they are not mulched and
            watered carefully to keep the soil moist during dry conditions. They
            do best in a location with afternoon shade that alleviates the
            effect of high summer temperatures. In contrast, lilacs or junipers
            will be stunted if planted in too much shade.
          </p>
          <h1>Chemical</h1>
          <p className="justified-text">
            Nontarget effects from chemicals in the environment may also cause
            abiotic disorders in plants. Pesticide and, more specifically,
            herbicide injury is the most common cause of phytotoxicity, with
            symptoms varying depending on the product used. The most common
            symptoms are leaf cupping and distortion caused by either spray
            drift on foliage or root uptake by ornamentals and vegetables.
            Broadleaf weed killers applied to nearby lawns or crop fields can
            cause sudden decline in sensitive crops, such as tomatoes or
            peppers, and can cause leaf curling in ornamental trees when applied
            incorrectly <br />
            Other chemical causes of abiotic injury include ice-melting salts or
            air pollutants. Ice-melting salts that wash off sidewalks and
            streets onto plants and soil often cause severe wilting or browning
            of leaf margins of trees, shrubs or turfgrass. Air pollutants that
            damage plants include sulfur dioxide and hydrogen fluoride from
            industrial sources. Incompletely burned hydrocarbons released from
            automobiles in heavily populated areas can result in production of
            both ozone and peroxyacetyl nitrate, known as PAN. These harmful
            gases enter plants through the stomata and cause a characteristic
            flecking or bronzing of leaves.
          </p>
        </>
      ),
    },
    {
      id: 9,
      image: diagnosePlantImg,
      title: "Steps to diagnose plant ",
      mainBlog:
        "To accurately diagnose a plant problem and find its remedy may seem like a daunting task...",
      content: (
        <>
          <p className="justified-text">
            To accurately diagnose a plant problem and find its remedy may seem
            like a daunting task. In some cases, identification may require help
            from plant disease specialists. Before turning to the experts,
            however, attempt to make a diagnosis yourself. At the very least,
            gather evidence on potential symptoms, signs and potential abiotic
            stress. Even if the result is not definite, the process is a
            learning experience that will provide useful information. <br />
            When diagnosing plant problems, pay close attention to detail when
            collecting information, like a detective attempting to solve a
            crime. Items that are most helpful include a 10-times-magnification
            hand lens, digital camera, trowel, pruning shears, pocketknife,
            flashlight and something to keep notes on. Establish a location to
            keep records and reference materials. <br />
            <ul>
              <li>Accurately identify the host plant.</li>
              <li>Determine what is normal for the plant.</li>
              <li>Learn common problems for the plant.</li>
              <li>Distinguish between biotic and abiotic causal factors.</li>
              <li>Examine the plant for symptoms and signs.</li>
            </ul>
          </p>
          <h1>Accurately identify the host plant.</h1>
          <p className="justified-text">
            First, know the plant. Every species, variety or cultivar has a
            unique set of characteristics that often provide important clues to
            identifying the source of a problem. For potential abiotic
            disorders, consider the plant's preferences for soil and climatic
            factors such as pH, nutrient requirements, soil type, moisture
            level, light intensity, and temperature. Also realize that each
            plant species, and even different cultivars, may have plant diseases
            that are specific and troublesome. <br />
            If the identity of a plant is unknown, you can consult references
            such as those suggested at the back of this guide, or any available
            gardening or landscape records. Garden centers usually have someone
            who can help identify a plant if you bring in a stem with several
            leaves. Local extension centers or the University of Missouri Plant
            Diagnostic Clinic can also be a good resource. Most states provide
            similar services. <br />
            References can help you determine whether a plant is located on a
            site that matches its requirements. For example, a flowering dogwood
            tree is adapted to a woodland understory environment with excellent
            drainage. It is unlikely to thrive if planted in a poorly drained
            soil or on a south-facing slope in full sun. If the tree survives in
            such circumstances, it is likely to develop leaf scorch and damage
            from dogwood borers attracted to the stressed tree. Such problems
            often result from an unsuitable planting site and are unlikely to be
            resolved with pesticides or other treatments.
          </p>
          <h1> Determine what is normal</h1>
          <p className="justified-text">
            Read plant descriptions and observe other plants of the species,
            variety or cultivar to determine the normal appearance for the
            plant. Sometimes a natural feature of the plant is mistaken for a
            symptom. For example, someone unfamiliar with the 'Golden Vicary'
            privet might mistake this cultivar's yellow leaf color for a sign of
            nitrogen deficiency. Similarly, a plant with a splotchy pattern on a
            leaf may be a variegated cultivar. A gardener unfamiliar with
            paperbark maple might be alarmed to see sheets of bark peeling from
            the trunk of a specimen, though it is a normal process for this
            plant. Conversely, bark peeling from the lower trunk of a red maple
            would be a legitimate cause for concern. <br />
            It can also help to observe other plants of the same species of
            roughly the same age and at the same time of year as the sample
            being evaluated. For example, during hot, dry weather, mature river
            birch trees often drop a significant portion of their leaves as a
            drought-survival mechanism. For pines, yellowing of the interior
            needles in the fall is likely to be part of the normal process of
            shedding 2- or 3-year-old leaves. <br />
            Like all living organisms, plants have life spans, with some having
            longer ones than others. A bur oak may live 300 years, but it is
            relatively rare to find a redbud older than 30. Trees late in their
            expected life spans often succumb to trunk decay, root rots,
            stem-boring insects or other pests that normally do not attack
            young, vigorously growing plants. If a plant has reached its normal
            life expectancy, you can only do so much before having to remove and
            replace it.
          </p>
          <h1> Learn the common diseases and disorders of the plant</h1>
          <p className="justified-text">
            Learn the common problems that affect the plant in question. Good
            reference materials can help as you match your observations with
            descriptions or photographs of typical plant diseases, and their
            related symptoms and signs. <br />A diagnostician learns to look for
            indications of problems that commonly affect certain species. Tall
            fescue is commonly damaged by brown patch, whereas Kentucky
            bluegrass is more frequently damaged by Pythium blight or dollar
            spot. Austrian pine trees are often affected by Diplodia pinea (also
            known as Sphaeropsis sapinea), a fungal tip blight that kills
            needles near the tips of lower branches. Zinnias, lilacs and
            zucchini are all commonly afflicted by powdery mildew. Red maple
            trees often display a leaf distortion caused by leaf hoppers. They
            also frequently suffer from chlorosis, indicated by yellow leaves
            with green veins, a condition that is frequently due to high-pH soil
            with little available manganese and iron. Learning these
            relationships may come from online or library research, discussion
            with someone at your garden center or plant source, or from the hard
            teachings of experience.
          </p>
          <h1> Distinguish between biotic and abiotic factors</h1>
          <p className="justified-text">
            Observe carefully to determine whether a plant problem has been
            caused by a living, biotic, organism or by some type of nonliving,
            abiotic, factor. By studying the cultural preferences of plants and
            looking for patterns in the landscape, you may be able to determine
            the cause of the plant damage. <br />
            Other than a characteristic plant symptom or pathogen sign, several
            clues may help determine if the problem is the result of a plant
            disease rather than an abiotic disorder
          </p>
          <h1>Look for symptoms and signs that indicate disease</h1>
          <p className="justified-text">
            Understanding symptoms and signs and the differences between them
            will help with disease diagnosis and allow for discussion with
            others. Symptoms are the plant's response to infection, or the
            signals that a plant is not functioning properly. Typical symptoms
            include leaf lesions, chlorosis, or malformed plant tissues. Signs
            are the visible parts of the pathogen or pest that caused the
            symptoms. Signs of a pathogen may include mold on the plant surface;
            spores; pycnidia, which are small flask-shaped structures that
            contain spores; or bacterial ooze. <br />
            Consider a typical blue spruce in Missouri. A common disease of this
            species is Rhizosphaera needlecast. To confirm the disease, you
            would first look for symptoms. Specifically, you would see the dead
            needles at the lower portions of the branches, because the disease
            attacks mature needles. Other diseases can also cause older needles
            of blue spruce to drop, so at this point, you would use a hand lens
            to further examine the brown or dropped needles, looking for signs
            of the fungus. Healthy spruce needles have rows of stomata that
            appear as white dots. In a tree with Rhizosphaera needlecast,
            pycnidia, which appear as small black bumps, emerge from the stomata
            (). Another fungal disease, Stigmina needle blight, also produces
            fungal structures in the pycnidia. However, these two diseases are
            managed similarly, with pruning and, in severe cases, preventive
            fungicides.
          </p>
        </>
      ),
    },
  ];

  return (
    <BlogContext.Provider value={blogData}>{children}</BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
