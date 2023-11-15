"use client";
import React, { useState } from "react";
import { MEALS } from "@/data/meals";
import { CATEGORIES } from "@/data/categories";
import Multiselect from "multiselect-react-dropdown";
import Switch from "react-switch";

const EditMeal = ({ params }) => {
  const mealId = params.mealId;
  const mealToEdit = MEALS.filter((item) => item.id === mealId);
  const [title, setTitle] = useState(mealToEdit[0].title);
  const [imageUrl, setImageUrl] = useState(mealToEdit[0].imageUrl);
  const [flag, setFlag] = useState(mealToEdit[0].flag);
  const [duration, setDuration] = useState(mealToEdit[0].duration);
  const [calories, setCalories] = useState(mealToEdit[0].calories);
  const [servings, setServings] = useState(mealToEdit[0].servings);
  const [ingredients, setIngredients] = useState(mealToEdit[0].ingredients);
  const [steps, setSteps] = useState(mealToEdit[0].steps);
  const [counter, setCounter] = useState(ingredients.length + 1);
  const ingredientsDetails = [];
  const stepsDetails = [];

  console.log(ingredientsDetails, stepsDetails);
  const addNewIngInputFiels = () => {
    setIngredients([...ingredients, ""]);
  };
  const deleteIngredientsInputField = (index, e) => {
    e.preventDefault();
    const newArray = [...ingredients];
    newArray.splice(index, 1);
    setIngredients(newArray);
  };

  const addNewStepsInputFiels = () => {
    setSteps([...steps, ""]);
  };
  const deleteStepsInputField = (index, e) => {
    e.preventDefault();
    const newArray = [...steps];
    newArray.splice(index, 1);
    setSteps(newArray);
  };

  const handleIngredientInput = (event, index) => {
    let { value } = event.target;
    let onChangeValue = [...ingredients];
    onChangeValue[index] = value;
    setIngredients(onChangeValue);
  };
  const handleStepsInput = (event, index) => {
    let { value } = event.target;
    let onChangeValue = [...steps];
    onChangeValue[index] = value;
    setSteps(onChangeValue);
  };
  for (const [key, value] of Object.entries(ingredients)) {
    if (value !== "") {
      ingredientsDetails.push(`${value}`);
    }
  }
  for (const [key, value] of Object.entries(steps)) {
    if (value !== "") {
      stepsDetails.push(`${value}`);
    }
  }

  const [catId, setCatId] = useState([]);
  const [category, setCategory] = useState([
    { id: "2dQKzEa7LSPXgFyVrkjn", title: "ايطاليانو" },
    { id: "AmSjdSajPJa3HmEfPwzx", title: "هلا بالخليج" },
    { id: "COszxRjARJTloZcwrgfn", title: "حلويات" },
    { id: "XgBInPRkghWvQE15YMdo", title: "مخبوزات" },
    { id: "ENyZxhcGdFqU2X3HktCF", title: "لحوم" },
    { id: "ZZX3WfnqmVUoExPorfzS", title: "مشويات" },
    { id: "FvWwsXNeP5Mo0xLzsYda", title: "مكسيكانو" },
    { id: "KZEg9C92LStgFop45z35", title: "هندوستاني" },
    { id: "RtndjQZeBum9smnJ7GPr", title: "صيني" },
    { id: "ZVSbniKIQHvquikUEN0K", title: "فرنساوي" },
    { id: "btpBDCR8uut6Jn6U9Bn9", title: "بحريات" },
    { id: "eFzh7O99tRefolKRduuN", title: "ياباني " },
    { id: "ecs6C8ha4tyzV1VLxMNn", title: "شوربات" },
    { id: "hb25pSDpegLubwQJV5Dl", title: "امريكاني" },
    { id: "hq2hQ0WYeebRvVXdnRgh", title: "كيتو" },
    { id: "j0ErklzXhrgHgJp3yN3R", title: "مصري" },
    { id: "l9hJvD13YoLD1wX5OwvD", title: "فطار او عشاء" },
    { id: "o1YsyvKbJUz3vTlyIjoH", title: "فراخ ودواجن" },
    { id: "qjAZ1VEaCtmVDCYTxUoT", title: "سلطات" },
    { id: "lV9U3eIFPBKpi5oS8mOw", title: "سندوتشات" },
    { id: "rWQfQOeHGoO1weF6Sdcp", title: "شامي" },
    { id: "vfiXYXaoRZCj9yquHipa", title: "نباتي" },
    { id: "prkRnZeDBVJ5S5RJFL2w", title: "صوصات" },
    { id: "0Qcm1H7v9Snpz98Zwwk3", title: "مشروبات" },
    { id: "bswiknaTh7dsrFavjWBT", title: "مقبلات" },
    { id: "PYkRMmhbJwleBQ7m9L1Z", title: "سناكس" },
  ]);

  const [hasMeatCube, setHasMeatCube] = useState(mealToEdit[0].hasMeatCube);
  const [hasGroundMeat, setHasGroundMeat] = useState(
    mealToEdit[0].hasGroundMeat
  );
  // const [hasKofta, setHasKofta] = useState(mealToEdit[0].hasKofta);
  const [hasLiver, setHasLiver] = useState(mealToEdit[0].hasLiver);
  const [hasSusage, setHasSusage] = useState(mealToEdit[0].hasSusage);
  const [hasMeatShank, setHasMeatShank] = useState(mealToEdit[0].hasMeatShank);
  const [hasEscalop, setHasEscalop] = useState(mealToEdit[0].hasEscalop);
  // const [hasMeatSteak, setHasMeatSteak] = useState(mealToEdit[0].hasMeatSteak);
  const [hasMeatFlito, setHasMeatFlito] = useState(mealToEdit[0].hasMeatFlito);
  const [hasMeatHeart, setHasMeatHeart] = useState(mealToEdit[0].hasMeatHeart);
  const [hasMeatKalawy, setHasMeatKalawy] = useState(
    mealToEdit[0].hasMeatKalawy
  );
  const [hasMeatKirsha, setHasMeatKirsha] = useState(
    mealToEdit[0].hasMeatKirsha
  );
  const [hasMeatKaware, setHasMeatKaware] = useState(
    mealToEdit[0].hasMeatKaware
  );
  const [hasMeatMombar, setHasMeatMombar] = useState(
    mealToEdit[0].hasMeatMombar
  );
  const [hasMeatHeadMeat, setHasMeatHeadMeat] = useState(
    mealToEdit[0].hasMeatHeadMeat
  );
  const [hasMeatAkawy, setHasMeatAkawy] = useState(mealToEdit[0].hasMeatAkawy);
  const [hasMeatBrain, setHasMeatBrain] = useState(mealToEdit[0].hasMeatBrain);
  const [hasCheckin, setHasCheckin] = useState(mealToEdit[0].hasCheckin);
  const [hasCheckinFillet, SetHasCheckinFillet] = useState(
    mealToEdit[0].hasCheckinFillet
  );
  const [hasTurkey, setHasTurkey] = useState(mealToEdit[0].hasTurkey);
  const [hasKidney, setHasKidney] = useState(mealToEdit[0].hasKidney);
  const [hasCheckinWings, setHasCheckinWings] = useState(
    mealToEdit[0].hasCheckinWings
  );
  const [hasCheckinLegs, setHasCheckinLegs] = useState(
    mealToEdit[0].hasCheckinLegs
  );
  // const [hasShawrma, setHasShawrma] = useState(mealToEdit[0].hasShawrma);
  const [hasCheckinBreast, setHasCheckinBreast] = useState(
    mealToEdit[0].hasCheckinBreast
  );
  // const [hasCheckinShish, setHasCheckinShish] = useState(mealToEdit[0].hasCheckinShish);
  const [hasFish, setHasFish] = useState(mealToEdit[0].hasFish);
  const [hasSeafood, setHasSeafood] = useState(mealToEdit[0].hasSeafood);
  const [hasCrabs, setHasCrabs] = useState(mealToEdit[0].hasCrabs);
  const [hasShrimp, setHasShrimp] = useState(mealToEdit[0].hasShrimp);
  const [hasFishFillet, setHasFishFillet] = useState(
    mealToEdit[0].hasFishFillet
  );
  const [hasCalamari, setHasCalamari] = useState(mealToEdit[0].hasCalamari);
  const [hasLobester, setHasLobester] = useState(mealToEdit[0].hasLobester);
  const [hasTuna, setHasTuna] = useState(mealToEdit[0].hasTuna);
  const [hasRice, setHasRice] = useState(mealToEdit[0].hasRice);
  const [hasPasta, setHasPasta] = useState(mealToEdit[0].hasPasta);
  const [hasFrik, setHasFrik] = useState(mealToEdit[0].hasFrik);
  const [hasPotatos, setHasPotatos] = useState(mealToEdit[0].hasPotatos);
  const [hasEggplants, setHasEggplants] = useState(mealToEdit[0].hasEggplants);
  const [hasZucchini, setHasZucchini] = useState(mealToEdit[0].hasZucchini);
  const [hasPeas, setHasPeas] = useState(mealToEdit[0].hasPeas);
  const [hasSpinach, setHasSpinach] = useState(mealToEdit[0].hasSpinach);
  const [hasCauliflower, setHasCauliflower] = useState(
    mealToEdit[0].hasCauliflower
  );
  const [hasOcra, setHasOcra] = useState(mealToEdit[0].hasOcra);
  const [hasMolokhia, setHasMolokhia] = useState(mealToEdit[0].hasMolokhia);
  const [hasVegetarian, setHasVegetarian] = useState(
    mealToEdit[0].hasVegetarian
  );
  // const [hasKeto, setHasKeto] = useState(mealToEdit[0].hasKeto);
  const [hasDiet, setHasDiet] = useState(mealToEdit[0].hasDiet);
  const [hasCabbage, setHasCabbage] = useState(mealToEdit[0].hasCabbage);
  const [hasBorccoli, setHasBorccoli] = useState(mealToEdit[0].hasBorccoli);
  const [hasMashroom, setHasMashroom] = useState(mealToEdit[0].hasMashroom);
  const [hasNodels, setHasNodels] = useState(mealToEdit[0].hasNodels);
  const [hasSherya, setHasSherya] = useState(mealToEdit[0].hasSherya);
  const [hasLazanya, setHasLazanya] = useState(mealToEdit[0].hasLazanya);
  const [hasLessanAsfour, setHasLessanAsfour] = useState(
    mealToEdit[0].hasLessanAsfour
  );
  const [hasOat, setHasOat] = useState(mealToEdit[0].hasOat);
  const [hasYellowLentils, setHasYellowLentils] = useState(
    mealToEdit[0].hasYellowLentils
  );
  const [hasBlackLentils, setHasBlackLentils] = useState(
    mealToEdit[0].hasBlackLentils
  );
  const [hasHomous, setHasHomous] = useState(mealToEdit[0].hasHomous);
  const [hasWhiteBeans, setHasWhiteBeans] = useState(
    mealToEdit[0].hasWhiteBeans
  );
  const [hasLobya, setHasLobya] = useState(mealToEdit[0].hasLobya);
  const [hasCorn, setHasCorn] = useState(mealToEdit[0].hasCorn);
  const [hasGreenBeans, setHasGreenBeans] = useState(
    mealToEdit[0].hasGreenBeans
  );
  const [hasCarots, setHasCarots] = useState(mealToEdit[0].hasCarots);
  const [hasHotDogs, setHasHotDogs] = useState(mealToEdit[0].hasHotDogs);
  const [hasBasmatiRice, setHasBasmatiRice] = useState(
    mealToEdit[0].hasBasmatiRice
  );
  const [hasHamamAndSeman, setHasHamamAndSeman] = useState(
    mealToEdit[0].hasHamamAndSeman
  );
  const [hasFakhda, setHasFakhda] = useState(mealToEdit[0].hasFakhda);
  const [hasSalmon, setHasSalmon] = useState(mealToEdit[0].hasSalmon);
  const [hasKaviar, setHasKaviar] = useState(mealToEdit[0].hasKaviar);
  const [hasSweetPotato, setHasSweetPotato] = useState(
    mealToEdit[0].hasSweetPotato
  );
  const [hasRinga, setHasRinga] = useState(mealToEdit[0].hasRinga);
  const [hasFesekh, setHasFesekh] = useState(mealToEdit[0].hasFesekh);
  const [hasBorghal, setHasBorghal] = useState(mealToEdit[0].hasBorghal);
  const foundCats = [];
  for (let i in mealToEdit[0].categoryIds) {
    const found = CATEGORIES.find(
      (item) => item.id === mealToEdit[0].categoryIds[i]
    );
    foundCats.push({ id: found?.id, title: found?.title });
  }

  const selectedCatId = (e) => {
    const selectedArr = [];
    for (let i = 0; i < e.length; i++) {
      selectedArr.push(e[i].id);
    }
    setCatId(selectedArr);
  };
  return (
    <div className="m-10 bg-white shadow-2xl pb-10 flex flex-col w-[80%] border-solid border-2 rounded-xl mx-auto">
      <div className="flex flex-col justify-center items-center mt-6">
        <img
          className="rounded-lg"
          src={imageUrl}
          alt={title}
          width={450}
          height={450}
        />
        <div className="flex mt-4">
          <input type="file" />
          <h5>تعديل الصورة</h5>
        </div>
      </div>
      <form className="mt-10" action="">
        {/* meal details section */}
        <section className="flex flex-col justify-end items-end mx-6">
          {/* title */}
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="title"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="title">أسم الأكلة</label>
            </div>
          </div>
        </section>
        {/* flag */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                type="text"
                maxLength={2}
                name="flag"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="flag">رمز البلد</label>
            </div>
          </div>
        </section>
        {/* duration */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="text"
                maxLength={2}
                name="duration"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="duration">وقت التحضير</label>
            </div>
          </div>
        </section>
        {/* calories */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                type="text"
                maxLength={2}
                name="calories"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="calories">السعرات الحرارية</label>
            </div>
          </div>
        </section>
        {/* servings */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                type="text"
                maxLength={2}
                name="servings"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="servings">عدد الأفراد</label>
            </div>
          </div>
        </section>
        {/* ingredients */}
        <section className="flex flex-col justify-end items-end mx-6">
          <h4>المكونات</h4>

          <div className="mt-4">
            {ingredients.map((item, index) => {
              return (
                <div className="mb-2">
                  {ingredients.length > 1 && (
                    <button
                      className="text-2xl tex-red-900 p-6"
                      onClick={(e) => deleteIngredientsInputField(index, e)}
                    >
                      -
                    </button>
                  )}
                  {index === ingredients.length - 1 && (
                    <button
                      className="text-2xl"
                      onClick={() => addNewIngInputFiels()}
                    >
                      +
                    </button>
                  )}
                  <input
                    className="border-2 px-2 py-2 w-[750px] rounded-lg mx-2"
                    style={{ direction: "rtl", minWidth: 400 }}
                    type="text"
                    value={item}
                    onChange={(event) => handleIngredientInput(event, index)}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* steps */}
        <section className="flex flex-col justify-end items-end mx-6">
          <h4>خطوات الطهي</h4>

          <div className="mt-4">
            {steps.map((item, index) => {
              return (
                <div className="mb-2">
                  {steps.length > 0 && (
                    <button
                      className="text-2xl tex-red-900 p-6"
                      onClick={(e) => deleteStepsInputField(index, e)}
                    >
                      -
                    </button>
                  )}
                  {index === steps.length - 1 && (
                    <button
                      className="text-2xl"
                      onClick={() => addNewStepsInputFiels()}
                    >
                      +
                    </button>
                  )}
                  <input
                    className="border-2 px-2 py-2 w-[750px] rounded-lg mx-2"
                    style={{ direction: "rtl", minWidth: 400 }}
                    type="text"
                    value={item}
                    onChange={(event) => handleStepsInput(event, index)}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* categories */}
        <section className="flex  justify-around ">
          {foundCats.map((item) => {
            return (
              <div className="mt-4">
                <button className=" bg-gray-200 p-2 px-4 text-center font-semibold rounded-lg">
                  {item.title}
                </button>
              </div>
            );
          })}
        </section>
        {/* categories options */}

        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mt-6 justify-center items-center">
            <Multiselect
              className="px-10"
              displayValue="title"
              onSelect={selectedCatId}
              options={category}
              showCheckbox={true}
              style={{ with: "150px" }}
            />
            <h3 className="ml-4">نوع الوصفة</h3>
          </div>
        </section>
        {/* add type */}

        <section className="mx-6 mt-6">
          <div className="grid grid-cols-10">
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2 text-center">مكعبات لحم</h3>
              <Switch
                onChange={(newValue) => setHasMeatCube(newValue)}
                checked={hasMeatCube}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لحم مفروم</h3>
              <Switch
                onChange={(newValue) => setHasGroundMeat(newValue)}
                checked={hasGroundMeat}
              />
            </div>
            {/* <div>
          <h3 className="mb-2">كفتة </h3>
          <Switch
            onChange={(newValue) => setHasKofta(newValue)}
            checked={hasKofta}
          />
        </div> */}
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كبدة</h3>
              <Switch
                onChange={(newValue) => setHasLiver(newValue)}
                checked={hasLiver}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سجق</h3>
              <Switch
                onChange={(newValue) => setHasSusage(newValue)}
                checked={hasSusage}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ريش</h3>
              <Switch
                onChange={(newValue) => setHasMeatShank(newValue)}
                checked={hasMeatShank}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سكالوب</h3>
              <Switch
                onChange={(newValue) => setHasEscalop(newValue)}
                checked={hasEscalop}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فخدة</h3>
              <Switch
                onChange={(newValue) => setHasFakhda(newValue)}
                checked={hasFakhda}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عرق لحمة</h3>
              <Switch
                onChange={(newValue) => setHasMeatFlito(newValue)}
                checked={hasMeatFlito}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">قلوب</h3>
              <Switch
                onChange={(newValue) => setHasMeatHeart(newValue)}
                checked={hasMeatHeart}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كلاوي</h3>
              <Switch
                onChange={(newValue) => setHasMeatKalawy(newValue)}
                checked={hasMeatKalawy}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كرشة</h3>
              <Switch
                onChange={(newValue) => setHasMeatKirsha(newValue)}
                checked={hasMeatKirsha}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كوارع</h3>
              <Switch
                onChange={(newValue) => setHasMeatKaware(newValue)}
                checked={hasMeatKaware}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ممبار</h3>
              <Switch
                onChange={(newValue) => setHasMeatMombar(newValue)}
                checked={hasMeatMombar}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لحمة راس</h3>
              <Switch
                onChange={(newValue) => setHasMeatHeadMeat(newValue)}
                checked={hasMeatHeadMeat}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عكاوي</h3>
              <Switch
                onChange={(newValue) => setHasMeatAkawy(newValue)}
                checked={hasMeatAkawy}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">مخ</h3>
              <Switch
                onChange={(newValue) => setHasMeatBrain(newValue)}
                checked={hasMeatBrain}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">هوت دوج</h3>
              <Switch
                onChange={(newValue) => setHasHotDogs(newValue)}
                checked={hasHotDogs}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فراخ</h3>
              <Switch
                onChange={(newValue) => setHasCheckin(newValue)}
                checked={hasCheckin}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فيليه فراخ</h3>
              <Switch
                onChange={(newValue) => SetHasCheckinFillet(newValue)}
                checked={hasCheckinFillet}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">رومي</h3>
              <Switch
                onChange={(newValue) => setHasTurkey(newValue)}
                checked={hasTurkey}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كبد وقوانص</h3>
              <Switch
                onChange={(newValue) => setHasKidney(newValue)}
                checked={hasKidney}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">اجنحة دجاج</h3>
              <Switch
                onChange={(newValue) => setHasCheckinWings(newValue)}
                checked={hasCheckinWings}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">وراك فراخ</h3>
              <Switch
                onChange={(newValue) => setHasCheckinLegs(newValue)}
                checked={hasCheckinLegs}
              />
            </div>
            {/* <div  className="mb-6">
          <h3 className="mb-2">شاورما</h3>
          <Switch
            onChange={(newValue) => setHasShawrma(newValue)}
            checked={hasShawrma}
          />
        </div> */}
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">صدور فراخ</h3>
              <Switch
                onChange={(newValue) => setHasCheckinBreast(newValue)}
                checked={hasCheckinBreast}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">حمام وسمان</h3>
              <Switch
                onChange={(newValue) => setHasHamamAndSeman(newValue)}
                checked={hasHamamAndSeman}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سمك</h3>
              <Switch
                onChange={(newValue) => setHasFish(newValue)}
                checked={hasFish}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سي فود</h3>
              <Switch
                onChange={(newValue) => setHasSeafood(newValue)}
                checked={hasSeafood}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كابوريا</h3>
              <Switch
                onChange={(newValue) => setHasCrabs(newValue)}
                checked={hasCrabs}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">جمبري</h3>
              <Switch
                onChange={(newValue) => setHasShrimp(newValue)}
                checked={hasShrimp}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سمك فيليه</h3>
              <Switch
                onChange={(newValue) => setHasFishFillet(newValue)}
                checked={hasFishFillet}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كاليماري</h3>
              <Switch
                onChange={(newValue) => setHasCalamari(newValue)}
                checked={hasCalamari}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">استاكوزا</h3>
              <Switch
                onChange={(newValue) => setHasLobester(newValue)}
                checked={hasLobester}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">تونة</h3>
              <Switch
                onChange={(newValue) => setHasTuna(newValue)}
                checked={hasTuna}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سلمون</h3>
              <Switch
                onChange={(newValue) => setHasSalmon(newValue)}
                checked={hasSalmon}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كفيار</h3>
              <Switch
                onChange={(newValue) => setHasKaviar(newValue)}
                checked={hasKaviar}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">رنجة</h3>
              <Switch
                onChange={(newValue) => setHasRinga(newValue)}
                checked={hasRinga}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فسيخ</h3>
              <Switch
                onChange={(newValue) => setHasFesekh(newValue)}
                checked={hasFesekh}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ارز</h3>
              <Switch
                onChange={(newValue) => setHasRice(newValue)}
                checked={hasRice}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ارز بسمتي</h3>
              <Switch
                onChange={(newValue) => setHasBasmatiRice(newValue)}
                checked={hasBasmatiRice}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">مكرونة</h3>
              <Switch
                onChange={(newValue) => setHasPasta(newValue)}
                checked={hasPasta}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">نودلز</h3>
              <Switch
                onChange={(newValue) => setHasNodels(newValue)}
                checked={hasNodels}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">شعرية</h3>
              <Switch
                onChange={(newValue) => setHasSherya(newValue)}
                checked={hasSherya}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لازانيا</h3>
              <Switch
                onChange={(newValue) => setHasLazanya(newValue)}
                checked={hasLazanya}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لسان عصفور</h3>
              <Switch
                onChange={(newValue) => setHasLessanAsfour(newValue)}
                checked={hasLessanAsfour}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">شوفان</h3>
              <Switch
                onChange={(newValue) => setHasOat(newValue)}
                checked={hasOat}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فريك</h3>
              <Switch
                onChange={(newValue) => setHasFrik(newValue)}
                checked={hasFrik}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">برغل</h3>
              <Switch
                onChange={(newValue) => setHasBorghal(newValue)}
                checked={hasBorghal}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بطاطس</h3>
              <Switch
                onChange={(newValue) => setHasPotatos(newValue)}
                checked={hasPotatos}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عدس اصفر</h3>
              <Switch
                onChange={(newValue) => setHasYellowLentils(newValue)}
                checked={hasYellowLentils}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عدس بحبة</h3>
              <Switch
                onChange={(newValue) => setHasBlackLentils(newValue)}
                checked={hasBlackLentils}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">حمص</h3>
              <Switch
                onChange={(newValue) => setHasHomous(newValue)}
                checked={hasHomous}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فاصوليا بيضاء</h3>
              <Switch
                onChange={(newValue) => setHasWhiteBeans(newValue)}
                checked={hasWhiteBeans}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لوبيا</h3>
              <Switch
                onChange={(newValue) => setHasLobya(newValue)}
                checked={hasLobya}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بطاطس</h3>
              <Switch
                onChange={(newValue) => setHasPotatos(newValue)}
                checked={hasPotatos}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بتنجان</h3>
              <Switch
                onChange={(newValue) => setHasEggplants(newValue)}
                checked={hasEggplants}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كوسة</h3>
              <Switch
                onChange={(newValue) => setHasZucchini(newValue)}
                checked={hasZucchini}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بسلة</h3>
              <Switch
                onChange={(newValue) => setHasPeas(newValue)}
                checked={hasPeas}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سبانخ</h3>
              <Switch
                onChange={(newValue) => setHasSpinach(newValue)}
                checked={hasSpinach}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">قرنبيط</h3>
              <Switch
                onChange={(newValue) => setHasCauliflower(newValue)}
                checked={hasCauliflower}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بامية</h3>
              <Switch
                onChange={(newValue) => setHasOcra(newValue)}
                checked={hasOcra}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ملوخية</h3>
              <Switch
                onChange={(newValue) => setHasMolokhia(newValue)}
                checked={hasMolokhia}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">نباتي</h3>
              <Switch
                onChange={(newValue) => setHasVegetarian(newValue)}
                checked={hasVegetarian}
              />
            </div>
            {/* <div  className="mb-6">
          <h3 className="mb-2">كيتو</h3>
          <Switch
            onChange={(newValue) => setHasKeto(newValue)}
            checked={hasKeto}
          />
        </div> */}
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">دايت</h3>
              <Switch
                onChange={(newValue) => setHasDiet(newValue)}
                checked={hasDiet}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كرنب</h3>
              <Switch
                onChange={(newValue) => setHasCabbage(newValue)}
                checked={hasCabbage}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بروكلي</h3>
              <Switch
                onChange={(newValue) => setHasBorccoli(newValue)}
                checked={hasBorccoli}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">مشروم</h3>
              <Switch
                onChange={(newValue) => setHasMashroom(newValue)}
                checked={hasMashroom}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ذرة</h3>
              <Switch
                onChange={(newValue) => setHasCorn(newValue)}
                checked={hasCorn}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فاصوليا خضراء</h3>
              <Switch
                onChange={(newValue) => setHasGreenBeans(newValue)}
                checked={hasGreenBeans}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">جزر</h3>
              <Switch
                onChange={(newValue) => setHasCarots(newValue)}
                checked={hasCarots}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بطاطا</h3>
              <Switch
                onChange={(newValue) => setHasSweetPotato(newValue)}
                checked={hasSweetPotato}
              />
            </div>
          </div>
        </section>
        {/* update meal */}

        <section className="flex mt-10 justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-400 rounded-lg px-6 py-4 hover:bg-blue-900 hover:text-gray-200 text-center text-white"
              // onClick={updateMeal}
            >
              تعدل الوصفة
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default EditMeal;
