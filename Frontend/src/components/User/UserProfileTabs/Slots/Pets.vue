<template>
    <b-container class="tab-view-container">
        <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="2">
            <b-col>
                <center>
                    <div class="pet-tile-wrapper">
                        <div class="image-placeholder"></div>
                        <div class="pet-tile-description">
                            <div class="pet-tile-name">Jager</div>
                            <div class="pet-tile-breed">German Shepherd</div>
                        </div>
                    </div>
                </center>
            </b-col>
            <b-col>
                <center>
                    <div class="pet-tile-wrapper">
                        <div class="image-placeholder"></div>
                        <div class="pet-tile-description">
                            <div class="pet-tile-name">Jager</div>
                            <div class="pet-tile-breed">German Shepherd</div>
                        </div>
                    </div>
                </center>
            </b-col>
            <b-col>
                <center>
                    <div class="pet-tile-wrapper">
                        <div class="image-placeholder"></div>
                        <div class="pet-tile-description">
                            <div class="pet-tile-name">Jager</div>
                            <div class="pet-tile-breed">German Shepherd</div>
                        </div>
                    </div>
                </center>
            </b-col>
            <b-col>
                <center>
                    <div class="pet-tile-wrapper">
                        <div class="image-placeholder"></div>
                        <div class="pet-tile-description">
                            <div class="pet-tile-name">Jager</div>
                            <div class="pet-tile-breed">German Shepherd</div>
                        </div>
                    </div>
                </center>
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
    .tab-view-container {
        display: flex;
        justify-content: center;
    }
    
    .pet-tile-description{
        text-align: start;
    }

    .image-placeholder{
        height: 250px;
        width: inherit;
        background: cornflowerblue;
        margin-bottom: 29px;
    }

    .pet-tile-wrapper {
        background: #FFF4FF;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        height: fit-content;
        overflow: hidden;
        margin: 30px;
    }


    @media only screen and (max-width: 600px) {
        .pet-tile-wrapper {
            margin: 10px;
        }
    }

    .pet-tile-description {
        margin-left: 28px;
        margin-bottom: 40px;
    }

    .pet-tile-name {
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
    }

    .pet-tile-breed {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 40px;
    }
</style>
    
<script>
export default {
    name: "Pets"
}
</script>