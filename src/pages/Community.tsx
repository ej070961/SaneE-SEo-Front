import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import * as C from '../styles/community.style';
import RightArrowIcon from '../assets/icons/right-arrow';
import { ReactComponent as SearchIcon } from '../assets/icons/search-icon.svg';
import { useNavigate } from 'react-router-dom';
import UserTrailMap from '../components/Community/UserTrailMap';
import PlaceSearchModal from '../components/Community/PlaceSearchModal';
import { useLocation } from '../contexts/LocationContext';
import { getAllCustomPosts } from '../apis/community';
import { useQuery } from '@tanstack/react-query';

function Community() {
  const [placeInput, setPlaceInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { latitude, longitude } = useLocation();

  const [lat, setLat] = useState<number>(latitude);
  const [lng, setLng] = useState<number>(longitude);

  const {
    isLoading,
    isSuccess,
    data: TrailData,
  } = useQuery({
    queryKey: ['getUserTrails'],
    queryFn: () => getAllCustomPosts(),
  });

  // if (!isLoading && data) {
  //   console.log(data);
  // }

  const navigate = useNavigate();

  return (
    <>
      <DefaultLayout />
      <C.HeaderLayout>
        <C.SearchContainer>
          <SearchIcon />
          <input
            name="text"
            placeholder="지역을 검색하세요"
            value={placeInput}
            onChange={(e) => {
              setPlaceInput(e.target.value);
              setIsOpen(true);
            }}
          ></input>
        </C.SearchContainer>
        <C.AddButton onClick={() => navigate('/user-trail-editor')}>
          <span className="button_icon-wrapper">
            <RightArrowIcon width={15} height={15} color="#645023" />
            <RightArrowIcon width={15} height={15} color="#645023" />
          </span>
          <span>내 코스 추가하기</span>
        </C.AddButton>
      </C.HeaderLayout>
      {isOpen && (
        <PlaceSearchModal
          placeInput={placeInput}
          setPlaceInput={setPlaceInput}
          setIsOpen={setIsOpen}
          setLat={setLat}
          setLng={setLng}
        />
      )}

      <UserTrailMap lat={lat} lng={lng} trailData={TrailData} />
    </>
  );
}

export default Community;
