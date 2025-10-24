import Image from 'next/image';

const teamMembers = [
  {
    name: 'Brad Pitt',
    role: 'Student Government President',
    description: 'Leading initiatives for student welfare, campus improvements, and academic advocacy.',
    image: '/images/brad-pitt.jpg'
  },
  {
    name: 'Will Smith',
    role: 'Student Senator',
    description: 'Representing student voices in university policies and budget allocation decisions.',
    image: '/images/will-smith.jpg'
  },
  {
    name: 'Margot Robbie',
    role: 'Events Coordinator',
    description: 'Organizing campus events, student activities, and community engagement programs.',
    image: '/images/margot-robbie.jpg'
  }
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-[36px] text-[#49306e] mb-4">Student Government Team</h2>
          <p className="text-lg text-gray-600">Dedicated students working for your interests</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center">
              <div className="mb-7 flex justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl text-[#49306e] mb-2">{member.name}</h3>
              <p className="text-[#febd11] mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}