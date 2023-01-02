# Author: Julian Johnson
# Date: 30-Dec-2022
# Description: This script will be used to generate monster descriptions for The Pit using chatgpt.
# Previous description i'm saving: The creature was massive, standing at least eight feet tall with a hulking, muscular build. Its skin was a sickly green color, and it was covered in oozing sores and scars. It had a long, snarling snout with jagged teeth, and its eyes glowed with an otherworldly, malevolent light. Its massive claws and talons looked sharp enough to tear through steel. It emitted a guttural growl as it lumbered towards its prey, its hot breath filling the air with the stench of decay. This monster was feared by all who encountered it, for it was said to be immortal, able to regenerate from even the most severe injuries. Its appetite for destruction was insatiable, and it left a trail of destruction wherever it went.
# A creatures of immense size, the Red Eye Monster is a creature of supernatural origin who lurks in the dark and feeds on the fear of its victims. It typically appears as a ghastly red figure, the eye in its head glowing with an unnatural light. Its limbs are lanky and wiry, ending in sharp claws capable of stabbing through flesh with ease. Its mouth is a gaping abyss, filled with razor-sharp fangs and a long forked tongue. Tales of the Red Eye Monster are often used to frighten children, warning them not to step out into the night.
# This monstrous creature dwells in the dark corners of the world, shrouded in mystery and cloaked in shadows. It has the form of a gigantic, misshapen humanoid with ram’s horns protruding from its head and a face that constantly contorts with fury. Red eyes glow with an unearthly light and it moves with an unnatural swiftness that belies its huge size. Its skin is scaly and coarse, and sharp claws extend from its hands and feet. Its primary weapons are its powerful jaws and razor-sharp teeth that it uses to rend and tear its victims with devastating ferocity. It feeds on the flesh of its opponents and its mere presence radiates terror and dread.

import openai
from dotenv import load_dotenv
import os

load_dotenv()
API = os.getenv("api_key")
openai.api_key=API

def getMonster():
    engine = "text-davinci-003"
    prompt = "Can you please provide a description of a monster in the horror-fantasy genre?"
 
    completion = openai.Completion.create(
        engine=engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        # tempurature=0.5,
    )

    resp = completion.choices[0].text
    return resp

def main():
    monsterDescription = getMonster()
    print(monsterDescription)

if __name__ == '__main__':
    main()