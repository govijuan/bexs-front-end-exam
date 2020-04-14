import React from 'react'
import NumberFormat from 'react-number-format'
import GraphCreditCardStyles from './GraphCreditCard.styles'

const GraphCreditCard = ({cardNumber='0000000000000000', cardOwnerName='Nome do Titular', cardExpireDate='00/00', cCardFlag='visa'}) =>
    <GraphCreditCardStyles>
        <div className='c-card-bg'>
            <svg xmlns="http://www.w3.org/2000/svg"  width="364" height="223.782" viewBox="0 0 364 223.782">
                <defs>
                    <radialGradient id="a" cx="90.102" cy="148.013" r="432.606" gradientTransform="translate(34.709 68.094) scale(0.615 0.54)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#5a7589"/>
                        <stop offset="0.323" stop-color="#436175"/>
                        <stop offset="0.549" stop-color="#315266"/>
                        <stop offset="1" stop-color="#124768"/>
                    </radialGradient>
                    <clipPath id="b">
                        <rect class="a" width="364" height="223.782"/>
                    </clipPath>
                </defs>
                <rect class="b" width="364" height="223.782" rx="10"/>
                <g class="c">
                    <g class="d" transform="translate(-198.203 19.768)">
                        <path class="e" d="M747.561,411.424c34.661-39.985,167.777-173.27,411.848-183.3,84.534-3.473,155.961,7.008,210.459,20.2" transform="translate(-747.56 -227.457)"/>
                        <path class="e" d="M747.561,410.568c34.994-39.6,170.151-172.6,414.432-179.283a716.515,716.515,0,0,1,207.873,23.9" transform="translate(-747.56 -226.003)"/>
                        <path class="e" d="M747.561,409.77c35.328-39.081,172.545-171.359,417.016-175.3a682.625,682.625,0,0,1,205.288,27.807" transform="translate(-747.56 -224.575)"/>
                        <path class="e" d="M747.561,408.986c35.658-38.655,174.932-170.453,419.6-171.288a647.894,647.894,0,0,1,202.707,31.6" transform="translate(-747.56 -223.194)"/>
                        <path class="e" d="M747.561,408.224c35.985-38.243,177.325-169.58,422.185-167.262a615.959,615.959,0,0,1,200.126,35.379" transform="translate(-747.56 -221.846)"/>
                        <path class="e" d="M747.56,407.488c36.308-37.845,179.723-168.747,424.769-163.229a586.735,586.735,0,0,1,197.537,39.149" transform="translate(-747.56 -220.532)"/>
                        <path class="e" d="M747.561,406.773c36.634-37.466,182.128-167.951,427.353-159.184A559.915,559.915,0,0,1,1369.866,290.5" transform="translate(-747.56 -219.25)"/>
                        <path class="e" d="M747.561,406.083c36.954-37.1,184.537-167.2,429.936-155.132,77.184,3.8,142.5,24.343,192.369,46.657" transform="translate(-747.56 -218.003)"/>
                        <path class="e" d="M747.561,405.417c37.278-36.754,186.959-166.485,432.521-151.068,76.131,4.78,140.578,26.765,189.786,50.4" transform="translate(-747.56 -216.788)"/>
                        <path class="e" d="M747.561,404.778c37.6-36.421,189.386-165.821,435.1-147,75.08,5.752,138.654,29.172,187.2,54.128" transform="translate(-747.56 -215.607)"/>
                        <path class="e" d="M747.561,404.163c37.916-36.105,191.828-165.2,437.689-142.922,74.026,6.708,136.724,31.565,184.613,57.843" transform="translate(-747.56 -214.459)"/>
                        <path class="e" d="M747.561,403.575c38.236-35.808,194.284-164.633,440.273-138.836,72.976,7.652,134.8,33.944,182.031,61.55" transform="translate(-747.56 -213.345)"/>
                        <path class="e" d="M747.561,403.012C786.115,367.491,944.312,238.9,1190.419,268.27c71.926,8.583,132.881,36.311,179.449,65.248" transform="translate(-747.56 -212.265)"/>
                        <path class="e" d="M747.561,402.477C786.431,367.226,946.8,238.829,1193,271.833c70.878,9.5,130.961,38.662,176.866,68.935" transform="translate(-747.56 -211.218)"/>
                        <path class="e" d="M747.561,401.968c39.19-35,201.741-163.238,448.026-126.536,69.831,10.406,129.037,41,174.278,72.6" transform="translate(-747.56 -210.204)"/>
                        <path class="e" d="M747.561,401.486c39.512-34.76,204.268-162.885,450.609-122.424,68.784,11.3,127.117,43.319,171.693,76.263" transform="translate(-747.56 -209.225)"/>
                        <path class="e" d="M747.561,401.054C787.4,366.44,954.439,238.079,1200.755,282.766c67.787,12.07,125.2,45.524,169.113,79.839" transform="translate(-747.56 -208.317)"/>
                        <path class="e" d="M747.561,400.606c40.149-34.327,209.388-162.357,455.777-114.183,66.67,13.036,123.293,48.2,166.529,83.8" transform="translate(-747.56 -207.364)"/>
                    </g>
                </g>
            </svg>
        </div>
        <div className='c-card-info'>
            <div className={'c-card-flag ' + cCardFlag}></div>
            <div className='c-card-number' ><NumberFormat value={cardNumber} displayType={'text'} format="#### #### #### ####"/></div>
            <div className='name-and-expire'>
                <div className='card-owner-name'>{cardOwnerName}</div>
                <div className='card-expiring-date'>{cardExpireDate}</div>
            </div>
        </div>
    </GraphCreditCardStyles>

    export default GraphCreditCard