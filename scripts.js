function shuffleVideos(videos) {
    for (let i = videos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [videos[i], videos[j]] = [videos[j], videos[i]];
    }
}

const videos = [
    { name: 'cata.leyah', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/84b0cb2e86b3054951462f788dc83d90-Full.mp4?w=394&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'Idk', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/d8167d8cec2064ec03d49228c7316331-Full.mp4?w=406&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'milaangelss', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/570e77ecbb59c534aba157ceb0588a25-Full.mp4?w=440&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'meliaare', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/5452f4078d558a46de37a3b27990aabd-Full.mp4?w=406&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'emarbb', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/161ffbf63239eb44ce14c99e0e3efb72-Full.mp4?w=254&h=480&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'emarbb', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/f001ad4f6c63607bf7e536cad19bc69a-Full.mp4?w=406&h=720&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'naserakatt', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/542175ebaa1563e46e95e710ee0dea6f-Full.mp4?w=480&h=854&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'idk', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/4857fa3bc8e2645634f39f56d610fdfb-Full.mp4?w=480&h=854&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'idk', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/2137f011d6c6fb370d63786a28ec1e65-Full.mp4?w=480&h=832&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'Lexie Baby', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/344b13f174c74dccb61c8d7ba16392d3-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'Lexie Baby', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/e2ef62319297cab7927858e7db3d13dc-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'emmiecupcakez', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ef8dff396d926b2ea4c6530f6d0ebfd1-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'mayleereid', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/a26283bdf2f00d6068ed9142b60661e3-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'rileymaelewis', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/dcb309ffa62bb8b1936b7336b3e3a499-Full.mp4?w=352&h=640&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'nami_m0mmy', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/a4a9f00ff3a9e1aa2af72f54d4cec377-Full.mp4?w=480&h=1036&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'mayleereid', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/5740c0be7c916d779d2ea6d029381529-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'min', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/b2200ffc27ecbef68d692ae68de53e18-Full.mp4?w=1080&h=1920&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'actuallyangel__', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/747ae19f278dda57c5de298cafc94082-Full.mp4?w=720&h=1280&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'BroadwayChanel', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/f0b9899b583cca81062fc809ab8269dd-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'footlocker girl idk', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ada99ca1064403ffde0588c5158145a8-Full.mp4?w=720&h=1280&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'iKandy Models', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/a47deaee8c8b92a85b10c6c1b9658d50-Full.mp4?w=1080&h=1920&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'bunnybunny924', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/d7e2325b9135205c814dba8391cfdae3-Full.mp4?w=1080&h=1920&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'francescaa_mrl', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/c51feeeaac01a18a40ba533840ede35d-Full.mp4?w=1080&h=1920&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'idk', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/7ef18e2a4ce7afb50617364b2d338a75-Full.mp4?w=576&h=1024&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/37cacb3e6faf93f1339be7c69cd692b5-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ff9c320f45eee2257b1d5d4cb40a8f98-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/82cf481f5ff055496a34d5a4199504f9-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/f8be2fb0ce70165ad8e612141bc7b106-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/0d87fd30480abf1f8d0438e2e69af4da-Full.mp4?w=1920&h=1080&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: '', src: 'https://cdn.gilcdn.com/ContentMediaGenericFiles/ef0360991bd1c305dbd0bfe07b61d432-Full.mp4?w=480&h=854&ia=1&Expires=1722028945&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZ2lsY2RuLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyMDI4OTQ1fX19XX0_&Signature=RTTR5aa%7ER%7ENUoqafuVSC65H1On-Ru19zDsNICPsyIL-O3W7DFB8bizyEchwKZ2Eg6NnHqOA9Xvnr8bAIEvra9GnOu4pdF1TQphXvqVSWoF69ZWwMWFbT-1-dibFTZx1puzB5QMTt-qyAQDSgmqhitewldospIrjApXsiPQDtZrYnbfi1V%7EtZ5quPjgI3afcFtCpgTdRLAYj-2B8zC71m%7E7bwEKEH6uQdc1z1xf%7EmoHhSXyEkpYYASDW0zqF7%7EpLaSpJzKNBujFduXX7469Sb-1AfpRZOBkhyuW43uTAcLPSY8gtUobrvod0921jeTfjeF5v345O20hCmpfUfq92trg__&Key-Pair-Id=K1FFKFZRWAZSB' },
    { name: 'w', src: 'w' } 
];

const container = document.getElementById('videoContainer');

shuffleVideos(videos)

// Insert videos into the container
videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.innerHTML = 
        <video controls loop>
            <source src="${video.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="video-info">
            ${video.name}
        </div>
    ;
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
