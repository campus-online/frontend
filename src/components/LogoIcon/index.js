import React from 'react'

const LogoIcon = props => (
	<svg
		width={208}
		height={32}
		viewBox="0 0 208 32"
		fill="currentColor"
		style={{display: 'block', height: '100%', width: 'auto'}}
		{...props}
	>
		<path d="M9.376 9.952C9.22667 9.84533 9.07733 9.77067 8.928 9.728C8.8 9.68533 8.62933 9.664 8.416 9.664C8.032 9.664 7.648 9.77067 7.264 9.984C6.90133 10.1973 6.57067 10.5173 6.272 10.944C5.99467 11.3707 5.77067 11.9147 5.6 12.576C5.42933 13.2373 5.344 14.016 5.344 14.912C5.344 15.808 5.46133 16.64 5.696 17.408C5.952 18.176 6.29333 18.8373 6.72 19.392C7.168 19.9467 7.70133 20.384 8.32 20.704C8.93867 21.024 9.632 21.184 10.4 21.184C11.0613 21.184 11.6587 21.088 12.192 20.896C12.7467 20.6827 13.28 20.4053 13.792 20.064L14.272 20.96C13.8453 21.344 13.4187 21.7067 12.992 22.048C12.5653 22.368 12.1173 22.6773 11.648 22.976C11.2 23.2533 10.72 23.52 10.208 23.776C9.696 24.0107 9.14133 24.2453 8.544 24.48C7.456 24.48 6.44267 24.3093 5.504 23.968C4.58667 23.6053 3.78667 23.104 3.104 22.464C2.44267 21.8027 1.92 21.0133 1.536 20.096C1.152 19.1573 0.96 18.112 0.96 16.96C0.96 15.7013 1.17333 14.592 1.6 13.632C2.048 12.6507 2.64533 11.808 3.392 11.104C4.13867 10.3787 5.00267 9.792 5.984 9.344C6.96533 8.87467 8 8.512 9.088 8.256C9.984 8.256 10.8693 8.416 11.744 8.736C12.6187 9.03467 13.3547 9.42933 13.952 9.92V13.728H10.304L9.376 9.952ZM24.6625 15.744L21.5905 16.96C21.2705 17.2587 21.0252 17.632 20.8545 18.08C20.6838 18.5067 20.5985 18.976 20.5985 19.488C20.5985 20.2987 20.7692 20.9067 21.1105 21.312C21.4518 21.7173 21.8465 21.92 22.2945 21.92C22.6358 21.92 22.9558 21.856 23.2545 21.728C23.5532 21.5787 23.7985 21.4293 23.9905 21.28L24.6625 20.832V15.744ZM23.1905 8.256C24.2998 8.256 25.2385 8.33067 26.0065 8.48C26.7958 8.62933 27.4252 8.896 27.8945 9.28C28.3852 9.64267 28.7372 10.1333 28.9505 10.752C29.1852 11.3707 29.3025 12.1493 29.3025 13.088V19.68C29.3025 20.2347 29.3345 20.7147 29.3985 21.12C29.4625 21.504 29.5692 21.8773 29.7185 22.24L31.2225 22.144L31.3505 23.168L25.7505 24.32L24.8545 21.728L20.8225 24.48C20.1398 24.48 19.4998 24.384 18.9025 24.192C18.3052 24.0213 17.7932 23.7653 17.3665 23.424C16.9398 23.0613 16.5985 22.624 16.3425 22.112C16.1078 21.6 15.9905 21.0133 15.9905 20.352C15.9905 19.6907 16.1078 19.072 16.3425 18.496C16.5985 17.92 17.0038 17.408 17.5585 16.96L24.6625 14.784V12.416C24.6625 11.52 24.5452 10.8693 24.3105 10.464C24.0972 10.0373 23.6172 9.824 22.8705 9.824C22.3158 9.824 21.7505 9.952 21.1745 10.208L20.6305 13.888H16.5345V10.944L23.1905 8.256ZM55.532 23.968L51.884 24.032L51.788 22.976L53.004 22.656V13.12C53.004 12.4373 52.876 11.9467 52.62 11.648C52.364 11.3493 51.9907 11.2 51.5 11.2C51.0733 11.2 50.6467 11.3067 50.22 11.52C49.7933 11.7333 49.3667 11.9787 48.94 12.256L48.268 12.768V22.656L49.452 22.976L49.356 24.032L45.9 23.968L42.54 24.032L42.444 22.976L43.628 22.656V13.12C43.628 12.4373 43.5 11.9467 43.244 11.648C42.988 11.3493 42.6147 11.2 42.124 11.2C41.6973 11.2 41.2707 11.3173 40.844 11.552C40.4173 11.7653 40.0013 12 39.596 12.256L38.892 12.768V22.656L40.108 22.976L40.044 24.032L36.46 23.968L32.716 24.032L32.62 22.976L34.412 22.656V10.496L32.588 10.656L32.46 9.664L37.548 8.576L38.764 8.544L38.86 11.52L43.788 8.256C44.5347 8.256 45.1533 8.32 45.644 8.448C46.156 8.576 46.5933 8.77867 46.956 9.056C47.3187 9.33333 47.596 9.664 47.788 10.048C47.98 10.432 48.108 10.9333 48.172 11.552L53.196 8.256C54.092 8.256 54.796 8.34133 55.308 8.512C55.8413 8.68267 56.2893 8.94933 56.652 9.312C57.0147 9.67467 57.26 10.144 57.388 10.72C57.5373 11.2747 57.612 12.0427 57.612 13.024V22.656L59.5 22.976L59.436 24.032L55.532 23.968ZM69.5033 24.48C69.0126 24.48 68.5433 24.4267 68.0953 24.32C67.6686 24.2133 67.2632 24.0427 66.8793 23.808V30.08L69.6632 30.368L69.5992 31.392L64.7032 31.328L60.7032 31.392L60.6392 30.368L62.3993 30.08V10.464L60.6392 10.656L60.5112 9.664L65.4392 8.608L66.6233 8.544L66.8472 11.392L71.1672 8.256C71.9992 8.256 72.7779 8.42667 73.5033 8.768C74.2286 9.10933 74.8686 9.58933 75.4233 10.208C75.9779 10.8267 76.4153 11.584 76.7353 12.48C77.0553 13.3547 77.2153 14.336 77.2153 15.424C77.2153 17.856 76.6072 19.84 75.3912 21.376C74.1966 22.912 72.2339 23.9467 69.5033 24.48ZM72.3833 16.992C72.3833 15.1147 72.1273 13.7067 71.6152 12.768C71.1032 11.808 70.4099 11.328 69.5352 11.328C69.1513 11.328 68.7993 11.4133 68.4792 11.584C68.1806 11.7333 67.8392 11.9467 67.4552 12.224L66.8793 12.608V21.984C67.1566 22.3253 67.4766 22.592 67.8393 22.784C68.2232 22.976 68.6392 23.072 69.0872 23.072C70.1112 23.0507 70.9113 22.5067 71.4873 21.44C72.0846 20.3733 72.3833 18.8907 72.3833 16.992ZM93.9702 19.68C93.9702 20.32 94.0022 20.832 94.0662 21.216C94.1303 21.5787 94.2263 21.9413 94.3542 22.304L95.7302 22.24L95.8263 23.264L90.3862 24.288L89.6503 21.344L84.6902 24.48C83.0049 24.48 81.8209 24.1387 81.1383 23.456C80.7542 23.072 80.4876 22.592 80.3382 22.016C80.2102 21.4187 80.1463 20.64 80.1463 19.68V10.496L78.4183 10.656L78.3223 9.6L83.3463 8.608L84.7543 8.544V19.424C84.7543 20.8107 85.3409 21.504 86.5142 21.504C86.8769 21.504 87.2289 21.4187 87.5702 21.248C87.9329 21.0773 88.3276 20.8533 88.7542 20.576L89.4902 20.128V10.496L87.8263 10.656L87.7303 9.6L92.5623 8.608L93.9702 8.544V19.68ZM106.099 10.592C105.779 10.272 105.427 10.016 105.043 9.824C104.659 9.632 104.201 9.536 103.667 9.536C103.049 9.536 102.547 9.696 102.163 10.016C101.779 10.336 101.587 10.7413 101.587 11.232C101.587 11.744 101.758 12.1707 102.099 12.512C102.462 12.8533 103.07 13.2693 103.923 13.76L106.675 15.36C107.593 15.872 108.275 16.4373 108.723 17.056C109.171 17.6747 109.385 18.4533 109.363 19.392C109.363 20.7147 108.862 21.7813 107.859 22.592C106.857 23.4027 105.31 24.0427 103.219 24.512C102.771 24.512 102.302 24.48 101.811 24.416C101.342 24.352 100.873 24.256 100.403 24.128C99.9339 24.0213 99.4859 23.8933 99.0593 23.744C98.6326 23.5947 98.2486 23.4347 97.9073 23.264L97.5872 18.624H98.8993L100.307 21.728C100.734 22.1547 101.182 22.496 101.651 22.752C102.142 23.008 102.665 23.136 103.219 23.136C103.945 23.136 104.499 22.9653 104.883 22.624C105.289 22.2613 105.491 21.8133 105.491 21.28C105.491 21.0027 105.449 20.7573 105.363 20.544C105.299 20.3307 105.182 20.128 105.011 19.936C104.841 19.744 104.617 19.5627 104.339 19.392C104.062 19.2 103.731 18.9867 103.347 18.752L100.595 17.088C100.211 16.8747 99.8486 16.64 99.5073 16.384C99.1659 16.128 98.8672 15.84 98.6112 15.52C98.3552 15.2 98.1526 14.848 98.0033 14.464C97.8539 14.0587 97.7793 13.6107 97.7793 13.12C97.7793 11.9893 98.2379 11.0293 99.1553 10.24C100.094 9.42933 101.641 8.768 103.795 8.256C105.033 8.256 106.025 8.37333 106.771 8.608C107.539 8.82133 108.211 9.06667 108.787 9.344V13.632H107.571L106.099 10.592ZM127.156 8.256C128.181 8.256 129.13 8.448 130.005 8.832C130.901 9.19467 131.669 9.71733 132.309 10.4C132.97 11.0613 133.482 11.872 133.844 12.832C134.207 13.7707 134.389 14.816 134.389 15.968C134.389 17.2907 134.165 18.432 133.717 19.392C133.29 20.3307 132.693 21.1413 131.925 21.824C131.157 22.4853 130.25 23.0293 129.205 23.456C128.181 23.8827 127.082 24.224 125.908 24.48C124.884 24.48 123.935 24.2987 123.061 23.936C122.186 23.552 121.429 23.0187 120.789 22.336C120.149 21.6533 119.647 20.8427 119.285 19.904C118.922 18.9653 118.74 17.92 118.74 16.768C118.74 15.4453 118.954 14.304 119.38 13.344C119.828 12.384 120.426 11.5733 121.172 10.912C121.941 10.2507 122.837 9.70667 123.86 9.28C124.885 8.85333 125.983 8.512 127.156 8.256ZM123.509 15.392C123.509 17.9093 123.839 19.8293 124.501 21.152C125.162 22.4533 125.962 23.104 126.901 23.104C127.733 23.104 128.383 22.6453 128.852 21.728C129.322 20.7893 129.557 19.3387 129.557 17.376C129.557 14.7733 129.215 12.8427 128.533 11.584C127.871 10.304 127.082 9.664 126.165 9.664C125.333 9.664 124.682 10.1227 124.213 11.04C123.743 11.936 123.509 13.3867 123.509 15.392ZM139.838 23.968L135.966 24.032L135.87 22.976L137.662 22.656V10.496L135.838 10.72L135.71 9.664L140.862 8.576L142.078 8.544L142.11 11.52L147.358 8.256C148.233 8.256 148.937 8.34133 149.47 8.512C150.003 8.66133 150.441 8.90667 150.782 9.248C151.145 9.61067 151.401 10.08 151.55 10.656C151.699 11.2107 151.774 11.9787 151.774 12.96V22.656L153.662 22.976L153.598 24.032L149.598 23.968L145.982 24.032L145.886 22.976L147.134 22.656V13.12C147.134 12.4373 146.995 11.9467 146.718 11.648C146.462 11.3493 146.078 11.2 145.566 11.2C145.097 11.2 144.649 11.3067 144.222 11.52C143.817 11.7333 143.379 11.9893 142.91 12.288L142.142 12.8V22.656L143.422 22.976L143.358 24.032L139.838 23.968ZM158.994 23.968L155.058 24.032L154.962 22.976L156.722 22.656V3.072L154.962 3.232L154.834 2.144L159.954 1.248L161.202 1.184V22.656L163.026 22.976L162.93 24.032L158.994 23.968ZM168.62 23.968L164.652 24.032L164.588 22.976L166.348 22.656V10.464L164.588 10.688L164.46 9.632L169.58 8.576L170.828 8.544V22.656L172.652 22.976L172.588 24.032L168.62 23.968ZM166.828 1.696L169.74 1.504L170.796 1.696L171.02 3.808L170.604 5.696L167.692 5.888L166.668 5.696L166.412 3.488L166.828 1.696ZM178.369 23.968L174.497 24.032L174.401 22.976L176.193 22.656V10.496L174.369 10.72L174.241 9.664L179.393 8.576L180.609 8.544L180.641 11.52L185.889 8.256C186.764 8.256 187.468 8.34133 188.001 8.512C188.535 8.66133 188.972 8.90667 189.313 9.248C189.676 9.61067 189.932 10.08 190.081 10.656C190.231 11.2107 190.305 11.9787 190.305 12.96V22.656L192.193 22.976L192.129 24.032L188.129 23.968L184.513 24.032L184.417 22.976L185.665 22.656V13.12C185.665 12.4373 185.527 11.9467 185.249 11.648C184.993 11.3493 184.609 11.2 184.097 11.2C183.628 11.2 183.18 11.3067 182.753 11.52C182.348 11.7333 181.911 11.9893 181.441 12.288L180.673 12.8V22.656L181.953 22.976L181.889 24.032L178.369 23.968ZM197.311 15.712C197.418 17.4187 197.93 18.752 198.847 19.712C199.765 20.6507 200.927 21.12 202.335 21.12C203.082 21.12 203.775 21.0027 204.415 20.768C205.055 20.5333 205.642 20.2453 206.175 19.904L206.719 20.832C206.229 21.2587 205.749 21.6533 205.279 22.016C204.831 22.3573 204.362 22.6773 203.871 22.976C203.402 23.2533 202.901 23.52 202.367 23.776C201.855 24.0107 201.29 24.2453 200.671 24.48C199.605 24.48 198.602 24.3093 197.663 23.968C196.725 23.6053 195.903 23.104 195.199 22.464C194.517 21.8027 193.973 21.0133 193.567 20.096C193.162 19.1573 192.959 18.112 192.959 16.96C192.959 14.7413 193.61 12.896 194.911 11.424C196.234 9.93067 198.165 8.87467 200.703 8.256C202.645 8.256 204.127 8.8 205.151 9.888C206.175 10.9547 206.687 12.3947 206.687 14.208V15.712H197.311ZM202.111 14.528V13.888C202.111 12.5867 201.951 11.5733 201.631 10.848C201.333 10.1227 200.735 9.76 199.839 9.76C199.029 9.76 198.399 10.1547 197.951 10.944C197.525 11.7333 197.29 12.8533 197.247 14.304C197.247 14.368 197.247 14.432 197.247 14.496C197.269 14.56 197.279 14.624 197.279 14.688L202.111 14.528Z" />
	</svg>
)

export default LogoIcon
