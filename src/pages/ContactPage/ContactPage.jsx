

import React from 'react';
import Breadcrumbs from '../../components/utils/Breadcrumbs';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F7F9] text-gray-900">
      <div className="container mx-auto p-6">
        <Breadcrumbs></Breadcrumbs>
        <div className=" flex flex-col justify-normal w-[60%] gap-8 mx-auto">
          <div >
            <div className="text-2xl my-4 text-gray-900 font-bold">Fill up a Form</div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name here"
                  className="w-full p-3 bg-white border border-gray-300 rounded text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full p-3 bg-white border border-gray-300 rounded text-gray-900"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message here"
                  className="w-full p-3 bg-white border border-gray-300 rounded text-gray-900"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded">
                  Send Email
                </button>
              </div>
            </form>
          </div>
         
        </div>
        <div className="mt-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.536003337086!2d90.37123791536242!3d23.81033169250961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7af01ec9b27%3A0xa47e8ec0af0b45cc!2sDhaka!5e0!3m2!1sen!2sbd!4v1620031465631!5m2!1sen!2sbd"
            className="w-full h-64 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
