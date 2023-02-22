<script setup>
const BehindUsersItems = ref([
  {
    idn: "CEO",
    image: "/images/members/CEO.png",
    name: "Santhosh Mathew",
    degination: "CEO",
    bio: "Santhosh has over 17 years in real estate industry with passion of quality selling. Santhosh was founder of Team Alliance reality, a highly successful team concept brokerage. He was a Top brand realtor in Toronto, and he was among 1% Top Team of realtors. He holds Engineering degree and Home Staging certification.",
  },
  {
    idn: "COO",
    image: "/images/members/COO.png",
    name: "Jacob Mathew",
    degination: "Chief Operating Officer",
    bio: "Jacob is the Chief Operating Officer at Propertyindus, where he is responsible for maintaining and driving operational results of the organization. Besides bringing strong leadership and strategic vision to the organization, Jacob plays pays a vital role in driving results, fuelling growth, and increasing the overall efficiency of the organization.",
  },
  {
    idn: "CPO",
    image: "/images/members/CPO.png",
    name: "Win Babu",
    degination: "Chief Project Officer",
    bio: "Win is the Chief Project Officer at Propertyindus. He plays an important role in scaling up the business by optimizing all project-oriented operations within the organization. With his strong understanding of managing large-scale projects, he drives efficiency and linkages between all major strategic projects in the organization to accelerate growth.",
  },
  {
    idn: "CIO",
    image: "/images/members/CIO.png",
    name: "Krishna Saha",
    degination: "Chief Innovation Officer",
    bio: "Krishna is the Chief Innovation Officer at Propertyindus, where he oversees all the innovations within the organization. He works across the entire organization to help identify, define and scale the best ideas besides playing a major role in our research and development team to explore new technologies.",
  },
  {
    idn: "CDO",
    image: "/images/members/CDO.png",
    name: "Heera Maria",
    degination: "Chief Digital Officer",
    bio: "Here is the Chief Marketing Officer at Propertyindus. She is responsible for overseeing the planning and execution of all our marketing and advertising initiatives. She acts as a growth driver and an expert at anticipating market trends and creating effective marketing strategies.",
  },
  {
    idn: "CCO",
    image: "/images/members/SCCO.png",
    name: "Soumyashree Biswa",
    degination: "Chief Communications Officer",
    bio: "Soumya is a Sales Representative at Propertyindus. She closely watches the market trends and enjoys helping customers in making the right decisions. She works as an integral part of the sales team and works with different departments to make sure that all our customers are served better.",
  },
  {
    idn: "CCO2",
    image: "/images/members/CCO.png",
    name: "Srijana Lama",
    degination: "Chief Customer Officer",
    bio: "Srijana is a Sales Representative at Propertyindus. She is an expert at initializing and managing relationships with customers. She enjoys talking to customers and helping them in understanding the market trends so that they can take well-informed decisions.",
  },
]);

const crewstoriesItems = ref([
  {
    image: "/images/behind_user.png",
    name: "Santhosh Mathew",
    degination: "Co-Founder & CEO1",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
]);
</script>

<template>
  <div>
    <NuxtLayout name="footer">
      <NuxtLayout name="subscribe">
        <BannersStoryBanner />
        <div class="our_crew">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                <div class="our_crew_content">
                  <h2>Our Crew</h2>
                  <p>
                    Although Property Indus is based in Canada, we have
                    operations in the USA, Canada, and India. We are
                    mission-driven, customer-obsessed tech veterans. No matter
                    where we work, we are dedicated to making Property Indus a
                    household name. To succeed, we need diverse, talented humans
                    from anywhere and everywhere. Join us. It'll be fun.
                  </p>
                  <NuxtLink to="/" class="button_one">
                    Explore Career options
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="behind_scenes">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-6">
                <div class="behind_scenes_title">
                  <h3>Behind The Scenes</h3>
                  <span>Meet the executive team</span>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <CardsBehindUsers
                    v-for="(BehindUsersItem, index) in BehindUsersItems"
                    :key="index"
                    :idn="BehindUsersItem.idn"
                    :image="BehindUsersItem.image"
                    :name="BehindUsersItem.name"
                    :degination="BehindUsersItem.degination"
                    :bio="BehindUsersItem.bio"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="crewstories" v-if="false">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="crewstories_title">
                  <h4>Crew stories</h4>
                </div>
              </div>
              <div class="col-md-12">
                <SlidersCrewStories :crewstoriesItems="crewstoriesItems" />
              </div>
            </div>
          </div>
        </div>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.our_crew {
  padding: 50px 0;
  background: #e2dce8;
  margin: 0 10px;
  border-radius: 10px;
}
.our_crew_content {
  text-align: center;
}
.our_crew_content h2 {
  font-size: 35px;
  margin-bottom: 15px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
}

.our_crew_content p {
  font-size: 19px;
}

.button_one {
  color: #fff;
  background: #523174;
  padding: 10px 25px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 35px;
  transition: all 0.3s ease-out;
  font-size: 16px;
}
.button_one:hover {
  background: #000;
  transition: all 0.3s ease-out;
}

.behind_scenes {
  padding: 60px 0;
}
.behind_scenes_title h3 {
  font-size: 35px;
  margin-bottom: 15px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
}

.behind_scenes_title {
  text-align: center;
  margin-bottom: 55px;
}

.behind_scenes_title span {
  font-size: 17px;
  display: block;
  margin-top: 8px;
}

.crewstories {
  padding: 55px 0;
}

.crewstories_title h4 {
  font-size: 43px;
  line-height: 1;
}

.crewstories_title {
  text-align: center;
  margin-bottom: 45px;
}

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .behind_scenes[data-v-ed9bcff3] {
    padding: 40px 0 0;
  }
  .our_crew_content p[data-v-ed9bcff3] {
    font-size: 17px;
  }
}
@media (max-width: 767.98px) {
  .our_crew[data-v-ed9bcff3] {
    padding: 30px 0;
  }
  .our_crew_content h2,
  .behind_scenes_title h3 {
    font-size: 30px;
    margin-bottom: 9px;
  }
  .our_crew_content p[data-v-ed9bcff3] {
    font-size: 16spx;
  }
}

</style>
