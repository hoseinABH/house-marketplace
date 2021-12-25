// icons
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';
import { Link, useParams } from 'react-router-dom';

const ListingItem = ({ listing, id, onDelete }) => {
  const { name } = useParams();
  return (
    <li className="categoryListing">
      <Link to={`/category/${name}/${id}`} className="categoryListingLink">
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />

        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            $
            {listing.offer
              ? listing.discountedPrice.toLocaleString()
              : listing.regularPrice.toLocaleString()}
            {listing.type === 'rent' && ' / Month'}
          </p>

          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : `1 Bedrooms`}
            </p>
            <img src={bathtubIcon} alt="bathroom" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : `1 Bedrooms`}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          fill="rgb(231 , 76 ,60)"
          className="removeIcon"
          onClick={() => onDelete(id, listing.name)}
        />
      )}
    </li>
  );
};

export default ListingItem;
