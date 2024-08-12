function shuffleVideos(videos) {
    for (let i = videos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [videos[i], videos[j]] = [videos[j], videos[i]];
    }
}

const videos = [
    { name: 'milaangelss', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/570e77ecbb59c534aba157ceb0588a25-Full.mp4?w=440&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'meliaare', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/5452f4078d558a46de37a3b27990aabd-Full.mp4?w=406&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'emarbb', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/6dff910c8867d3406f450995e7939c32-Full.mp4?w=1080&h=1920&ia=1&Expires=1723480069&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIzNDgwMDY5fX19XX0_&Signature=Ccuv0f1Y07NJe6GbOdwBEvuJ68FnKZUKx9Ecea%7Ef2UWTLsrUvdwVxb0VFaEsbajV-e2ZmG-SFQAry-5WIyivTaV0EtwDa0Z4etDAAI2Ab95Sk1-eg2vC4jfdU4UyfYfc3-826RerDbhAZ6Pr1yoWZcx1EWDt5bQlZM5wp216QGlwNZQqe-ofM9q655EXUN9IqibunFDBKCVYnT7TihAl0A%7EQjhVCsoXf--MeLwzEWSqhfQRObVZYgOEWXVgqS-vUeoRfLkPRjfGFQeQ%7EnHAYu%7Ew3xihq3qH6lewqAdsJlw0iQdAMSjafagehSr41b04%7EBIGta5xoBrUwSJNeoszL5A__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'emarbb', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/f001ad4f6c63607bf7e536cad19bc69a-Full.mp4?w=406&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'idk', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/2137f011d6c6fb370d63786a28ec1e65-Full.mp4?w=480&h=832&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'Lexie Baby', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/344b13f174c74dccb61c8d7ba16392d3-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'Lexie Baby', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/e2ef62319297cab7927858e7db3d13dc-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'emmiecupcakez', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ef8dff396d926b2ea4c6530f6d0ebfd1-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'rileymaelewis', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/dcb309ffa62bb8b1936b7336b3e3a499-Full.mp4?w=352&h=640&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'nami_m0mmy', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/a4a9f00ff3a9e1aa2af72f54d4cec377-Full.mp4?w=480&h=1036&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'mayleereid', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/5740c0be7c916d779d2ea6d029381529-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'BroadwayChanel', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/f0b9899b583cca81062fc809ab8269dd-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ff9c320f45eee2257b1d5d4cb40a8f98-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/82cf481f5ff055496a34d5a4199504f9-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/f8be2fb0ce70165ad8e612141bc7b106-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ef0360991bd1c305dbd0bfe07b61d432-Full.mp4?w=480&h=854&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'mayleereid', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/e3294943a8d02dbf81dbfdb33214e18f-Full.mp4?w=1080&h=1920&ia=1&Expires=1722557202&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyNTU3MjAyfX19XX0_&Signature=RA35ThjsaOXKlFQBEvTCa0vi-gnNb%7E9sG5QOOsy66FDbAuQvGDYQ2wf71gmTBqR4QJvunohG4JOu%7EMS6fcc58yjjdbX0pxwR%7EOuZgVBR3-KXRhuKurKJGDCdSeprS2J3gqZO-o5srcYqdTvHfI272smV6ulwSsSCIIze9rvYoHWcg6Jrs9v5WTYzK8Stk21t7X7R6IVg2EIazcXtCK5ov5YTu6sMGgg%7E3u7wrmUjg05lL6oCiIBL9-6GA5-Lh6KAHucAfQ-XI-geQb9fqKXeT9ssDtVIkaY06m6FogsBX4uyETLuvD%7EElhzYVit-ZG8lwncxJy0vR54DNeIS6IymNQ__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'husvjjalfan', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/71dc77413d3cbaf492b0d013408d59a9-Full.mp4?w=682&h=1080&ia=1&Expires=1722809027&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyODA5MDI3fX19XX0_&Signature=fFSheM8dbHohLgmn2THj93yYxuWtzreS8IZpqpC6FDcC3Rur4AQGUx4d8PlL-krxxzv9jRsiTKxqSypt5qDC%7EgxAVEQhIPwpxE951un4Yh79M6T4F33dFIAdKKkblS-XI4ax4ecOXmmjPtlXJEyZPU5JizuVtz%7EYi8wHwp9%7Eq78Ck12%7E5N5AOMMnQhQc45jLLq7vka8EwTD5769lvXJX-taw-uj%7Eh8PmGGjQLP%7EWZKPxOhR0KKvsQTpwVHGi5llYIocirarSw4lPv%7ETVDnBp%7EQ2j4%7E2kfA3tAGnOGWF1g4BzK5U5ztOaWckOMjr2Q-Hqko2bqNhGUHQ6AnmEX7eEeQ__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'husvjjalfan', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/7a41be952a32be95e95ce129d8d14d44-Full.mp4?w=720&h=1280&ia=1&Expires=1722809027&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyODA5MDI3fX19XX0_&Signature=fFSheM8dbHohLgmn2THj93yYxuWtzreS8IZpqpC6FDcC3Rur4AQGUx4d8PlL-krxxzv9jRsiTKxqSypt5qDC%7EgxAVEQhIPwpxE951un4Yh79M6T4F33dFIAdKKkblS-XI4ax4ecOXmmjPtlXJEyZPU5JizuVtz%7EYi8wHwp9%7Eq78Ck12%7E5N5AOMMnQhQc45jLLq7vka8EwTD5769lvXJX-taw-uj%7Eh8PmGGjQLP%7EWZKPxOhR0KKvsQTpwVHGi5llYIocirarSw4lPv%7ETVDnBp%7EQ2j4%7E2kfA3tAGnOGWF1g4BzK5U5ztOaWckOMjr2Q-Hqko2bqNhGUHQ6AnmEX7eEeQ__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'husvjjalfan', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/99e19c75588ffba2512784301b18eaee-Full.mp4?w=400&h=718&ia=1&Expires=1722809027&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyODA5MDI3fX19XX0_&Signature=fFSheM8dbHohLgmn2THj93yYxuWtzreS8IZpqpC6FDcC3Rur4AQGUx4d8PlL-krxxzv9jRsiTKxqSypt5qDC%7EgxAVEQhIPwpxE951un4Yh79M6T4F33dFIAdKKkblS-XI4ax4ecOXmmjPtlXJEyZPU5JizuVtz%7EYi8wHwp9%7Eq78Ck12%7E5N5AOMMnQhQc45jLLq7vka8EwTD5769lvXJX-taw-uj%7Eh8PmGGjQLP%7EWZKPxOhR0KKvsQTpwVHGi5llYIocirarSw4lPv%7ETVDnBp%7EQ2j4%7E2kfA3tAGnOGWF1g4BzK5U5ztOaWckOMjr2Q-Hqko2bqNhGUHQ6AnmEX7eEeQ__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'cocostar', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/a7a2e7e19fb255abb88ab1613005697d-Full.mp4?w=404&h=720&ia=1&Expires=1723480069&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIzNDgwMDY5fX19XX0_&Signature=Ccuv0f1Y07NJe6GbOdwBEvuJ68FnKZUKx9Ecea%7Ef2UWTLsrUvdwVxb0VFaEsbajV-e2ZmG-SFQAry-5WIyivTaV0EtwDa0Z4etDAAI2Ab95Sk1-eg2vC4jfdU4UyfYfc3-826RerDbhAZ6Pr1yoWZcx1EWDt5bQlZM5wp216QGlwNZQqe-ofM9q655EXUN9IqibunFDBKCVYnT7TihAl0A%7EQjhVCsoXf--MeLwzEWSqhfQRObVZYgOEWXVgqS-vUeoRfLkPRjfGFQeQ%7EnHAYu%7Ew3xihq3qH6lewqAdsJlw0iQdAMSjafagehSr41b04%7EBIGta5xoBrUwSJNeoszL5A__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'Ari Kytsya', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/5da9301d9d8ab6c02554ed8d99f739c8-Full.mp4?w=1080&h=1920&ia=1&Expires=1723480069&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIzNDgwMDY5fX19XX0_&Signature=Ccuv0f1Y07NJe6GbOdwBEvuJ68FnKZUKx9Ecea%7Ef2UWTLsrUvdwVxb0VFaEsbajV-e2ZmG-SFQAry-5WIyivTaV0EtwDa0Z4etDAAI2Ab95Sk1-eg2vC4jfdU4UyfYfc3-826RerDbhAZ6Pr1yoWZcx1EWDt5bQlZM5wp216QGlwNZQqe-ofM9q655EXUN9IqibunFDBKCVYnT7TihAl0A%7EQjhVCsoXf--MeLwzEWSqhfQRObVZYgOEWXVgqS-vUeoRfLkPRjfGFQeQ%7EnHAYu%7Ew3xihq3qH6lewqAdsJlw0iQdAMSjafagehSr41b04%7EBIGta5xoBrUwSJNeoszL5A__&Key-Pair-Id=K1FFKFZRWAZSB' } 
];

const container = document.getElementById('videoContainer');

shuffleVideos(videos)

// Insert videos into the container
videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.innerHTML = `
        <video controls loop>
            <source src="${video.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="video-info">
            ${video.name}
        </div>
    `;
    container.appendChild(videoItem);
});

// Function to handle video play/pause and restart based on visibility
const handleVisibility = (entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (entry.isIntersecting) {
            video.currentTime = 0; // Restart video when it comes into view
            video.play();
        } else {
            video.pause();
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleVisibility, {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the video is visible
});

// Observe each video item
document.querySelectorAll('.video-item').forEach(item => {
    observer.observe(item);
});
