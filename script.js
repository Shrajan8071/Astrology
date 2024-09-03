const remedies = {
    Sun: {
        "1st": "Wear gold, recite mantras",
        "2nd": "Cultivate financial stability, focus on self-worth",
        "3rd": "Improve communication skills, build relationships with siblings",
        "4th": "Connect with roots and family, establish a harmonious home environment",
        "5th": "Enhance creativity and self-expression, pursue artistic endeavors",
        "6th": "Focus on health and well-being, practice self-discipline",
        "7th": "Develop strong partnerships, seek balance in relationships",
        "8th": "Transform and let go of attachments, embrace the unknown",
        "9th": "Embrace spirituality, seek higher knowledge",
        "10th": "Cultivate leadership skills, establish a strong reputation",
        "11th": "Foster social connections, engage in community activities",
        "12th": "Reflect and introspect, connect with the divine"
    },
    Moon: {
        "1st": "Nurture emotional well-being, connect with mother",
        "2nd": "Establish financial security, invest wisely",
        "3rd": "Enhance communication and networking, develop writing skills",
        "4th": "Create a peaceful and nurturing home environment",
        "5th": "Cultivate creativity, engage in activities that bring joy",
        "6th": "Practice self-care and emotional balance, serve others",
        "7th": "Establish harmonious partnerships, focus on collaboration",
        "8th": "Embrace transformation and change, explore occult knowledge",
        "9th": "Expand spiritual beliefs, pursue higher education",
        "10th": "Build a solid foundation for career, establish public image",
        "11th": "Nurture friendships, join groups aligned with your interests",
        "12th": "Release attachments, engage in spiritual practices"
    },
    Mars: {
        "1st": "Engage in physical activities, practice assertiveness",
        "2nd": "Channel energy into financial planning, be cautious with investments",
        "3rd": "Improve communication skills, develop assertiveness in relationships",
        "4th": "Establish a stable and secure home environment, resolve family conflicts",
        "5th": "Cultivate passion and self-confidence, pursue hobbies",
        "6th": "Practice self-discipline, focus on overcoming challenges",
        "7th": "Collaborate and negotiate in partnerships, balance independence",
        "8th": "Transform and regenerate, embrace the cycles of life",
        "9th": "Seek higher knowledge and wisdom, engage in philosophical pursuits",
        "10th": "Take charge of career, pursue ambitious goals",
        "11th": "Pursue innovative ideas, network with influential individuals",
        "12th": "Retreat and recharge, engage in introspection"
    },
    Mercury: {
        "1st": "Enhance communication skills, study, learn new languages",
        "2nd": "Cultivate financial intelligence, diversify income sources",
        "3rd": "Strengthen sibling relationships, engage in short-distance travel",
        "4th": "Create a comfortable and harmonious home environment, communicate with family",
        "5th": "Foster intellectual pursuits, engage in educational activities",
        "6th": "Develop organizational skills, focus on work and service",
        "7th": "Foster harmonious partnerships, practice diplomacy",
        "8th": "Embrace transformation and change, explore hidden aspects",
        "9th": "Expand spiritual and philosophical understanding",
        "10th": "Focus on career and public image, communicate with authority",
        "11th": "Foster social connections, contribute to humanitarian causes",
        "12th": "Embrace solitude, engage in spiritual practices"
    },
    Venus: {
        "1st": "Focus on personal appearance, cultivate artistic pursuits",
        "2nd": "Develop financial harmony and stability, invest in luxury items",
        "3rd": "Nurture sibling relationships, engage in creative writing",
        "4th": "Create a beautiful and harmonious home environment, foster family bonds",
        "5th": "Cultivate artistic talents, pursue creative projects",
        "6th": "Promote health and well-being, maintain a balanced lifestyle",
        "7th": "Cultivate balanced and harmonious partnerships",
        "8th": "Embrace transformation and emotional depth",
        "9th": "Expand spiritual beliefs, embark on spiritual journeys",
        "10th": "Establish a strong professional network, pursue higher education",
        "11th": "Foster friendships, actively participate in social circles",
        "12th": "Let go of attachments, practice surrender and forgiveness"
    },
    Jupiter: {
        "1st": "Practice self-belief, engage in physical activities",
        "2nd": "Focus on financial abundance and growth, give to charity",
        "3rd": "Enhance communication skills, pursue higher education",
        "4th": "Create a warm and welcoming home environment, support family members",
        "5th": "Cultivate creativity and self-expression, explore new hobbies",
        "6th": "Practice self-discipline, engage in service to others",
        "7th": "Cultivate balanced and harmonious partnerships, seek fairness",
        "8th": "Embrace transformation and regeneration, embrace inner strength",
        "9th": "Expand spiritual and philosophical beliefs",
        "10th": "Focus on career growth, embrace opportunities",
        "11th": "Foster friendships, contribute to social causes",
        "12th": "Engage in spiritual practices, connect with a higher purpose"
    },
    Saturn: {
        "1st": "Develop discipline and responsibility, practice humility",
        "2nd": "Establish financial stability through hard work, avoid extravagance",
        "3rd": "Strengthen sibling relationships, take responsibility for communication",
        "4th": "Create a stable and secure home environment, honor traditions",
        "5th": "Cultivate discipline and structure in creative pursuits",
        "6th": "Focus on self-improvement, practice self-discipline in daily routines",
        "7th": "Cultivate long-lasting partnerships, seek commitment",
        "8th": "Embrace transformation and self-mastery",
        "9th": "Deepen spiritual beliefs and practices",
        "10th": "Focus on career advancement, establish a solid reputation",
        "11th": "Nurture friendships based on trust and loyalty",
        "12th": "Let go of attachments, embrace selflessness"
    },
    RahuKetu: {
        "1st": "Seek spiritual guidance, perform acts of selflessness",
        "2nd": "Practice financial caution, avoid risky investments",
        "3rd": "Focus on effective communication, let go of unnecessary connections",
        "4th": "Create a peaceful and harmonious home environment, release attachment to material possessions",
        "5th": "Cultivate unique talents and self-expression, embrace individuality",
        "6th": "Practice self-care and attention to detail, overcome challenges in daily life",
        "7th": "Cultivate balanced and harmonious partnerships, seek compromise",
        "8th": "Embrace transformation and growth, release fears and attachments",
        "9th": "Expand spiritual understanding, explore mystical practices",
        "10th": "Focus on career growth and recognition",
        "11th": "Foster friendships based on shared goals and aspirations",
        "12th": "Practice detachment, engage in spiritual retreats"
    }
};

function displayRemedy() {
    const planet = document.getElementById('planet').value;
    const house = document.getElementById('house').value;

    if (planet && house) {
        const remedy = remedies[planet][house];
        document.getElementById('output').innerText = remedy;
    } else {
        document.getElementById('output').innerText = "Please select both a planet and a house.";
    }
}
